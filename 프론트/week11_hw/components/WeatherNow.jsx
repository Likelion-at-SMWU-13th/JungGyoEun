import { useEffect, useState } from "react";

/** 고정 좌표 (원하는 위/경도로 바꿔도 됨) */
const FIXED_LAT = 36.805129;
const FIXED_LON = 127.130894;

/** 위경도 → 기상청 격자(nx, ny) */
function toXY(lat, lon) {
  const RE = 6371.00877,
    GRID = 5,
    SLAT1 = 30,
    SLAT2 = 60,
    OLON = 126,
    OLAT = 38,
    XO = 43,
    YO = 136;
  const DEGRAD = Math.PI / 180;
  let re = RE / GRID,
    sl1 = SLAT1 * DEGRAD,
    sl2 = SLAT2 * DEGRAD,
    olon = OLON * DEGRAD,
    olat = OLAT * DEGRAD;
  let sn =
    Math.tan(Math.PI * 0.25 + sl2 * 0.5) / Math.tan(Math.PI * 0.25 + sl1 * 0.5);
  sn = Math.log(Math.cos(sl1) / Math.cos(sl2)) / Math.log(sn);
  let sf = Math.tan(Math.PI * 0.25 + sl1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(sl1)) / sn;
  let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);
  let ra = Math.tan(Math.PI * 0.25 + lat * DEGRAD * 0.5);
  ra = (re * sf) / Math.pow(ra, sn);
  let th = lon * DEGRAD - olon;
  if (th > Math.PI) th -= 2 * Math.PI;
  if (th < -Math.PI) th += 2 * Math.PI;
  th *= sn;
  return {
    nx: Math.floor(ra * Math.sin(th) + XO + 0.5),
    ny: Math.floor(ro - ra * Math.cos(th) + YO + 0.5),
  };
}

/** 초단기실황: 현재시각 -40분 → 정시(HH00) */
function baseForUltraNcst() {
  const now = new Date(); // 브라우저 로컬시간(KST) 그대로 사용
  now.setMinutes(now.getMinutes() - 40); // 발표 반영 여유
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  return { base_date: `${y}${m}${d}`, base_time: `${hh}00` };
}

export default function WeatherNow() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
    const { nx, ny } = toXY(FIXED_LAT, FIXED_LON);
    const serviceKey = import.meta.env.VITE_KMA_KEY; // Decoding 키 그대로

    async function callOnce(base_date, base_time) {
      const qs = new URLSearchParams({
        serviceKey,
        pageNo: "1",
        numOfRows: "1000",
        dataType: "JSON",
        base_date,
        base_time,
        nx: String(nx),
        ny: String(ny),
      });
      const url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?${qs}`;
      const res = await fetch(url);
      const text = await res.text();

      if (!text.trim().startsWith("{")) {
        const msg =
          text.match(/<resultMsg>([^<]+)<\/resultMsg>/i)?.[1] ??
          "JSON이 아닌 응답";
        const code =
          text.match(/<resultCode>([^<]+)<\/resultCode>/i)?.[1] ?? "??";
        return { code, msg, items: [] };
      }
      const j = JSON.parse(text);
      const header = j?.response?.header;
      const items = j?.response?.body?.items?.item ?? [];
      return {
        code: header?.resultCode ?? "??",
        msg: header?.resultMsg ?? "",
        items,
      };
    }

    function stepBack(base_date, base_time) {
      const y = base_date.slice(0, 4),
        mo = base_date.slice(4, 6),
        d = base_date.slice(6, 8);
      const h = base_time.slice(0, 2);
      const dt = new Date(Number(y), Number(mo) - 1, Number(d), Number(h));
      dt.setHours(dt.getHours() - 1);
      const bd = `${dt.getFullYear()}${String(dt.getMonth() + 1).padStart(
        2,
        "0"
      )}${String(dt.getDate()).padStart(2, "0")}`;
      const bt = `${String(dt.getHours()).padStart(2, "0")}00`;
      return { base_date: bd, base_time: bt };
    }

    (async () => {
      try {
        let { base_date, base_time } = baseForUltraNcst();
        let tries = 0,
          resp;

        // 최대 3시간 전까지 재시도 (NO_DATA, 빈 items 모두 후퇴)
        while (tries < 3) {
          resp = await callOnce(base_date, base_time);
          if (resp.code === "00" && resp.items.length > 0) break;
          // 콘솔 참고용 로그
          console.warn("[KMA]", resp.code, resp.msg, base_date, base_time);
          ({ base_date, base_time } = stepBack(base_date, base_time));
          tries++;
        }

        if (resp.code !== "00" || resp.items.length === 0) {
          throw new Error(`${resp.code} ${resp.msg || "데이터 없음"}`);
        }

        const m = Object.fromEntries(
          resp.items.map((it) => [it.category, it.obsrValue])
        );
        const num = (v) => (v === "-" || v == null ? 0 : Number(v));
        setData({
          temp: num(m.T1H),
          humidity: num(m.REH),
          wind: num(m.WSD),
          pty: Number(m.PTY ?? 0),
          rain1h: num(m.RN1),
        });
        setErr(null);
      } catch (e) {
        setErr(e.message);
        setData(null);
      }
    })();
  }, []);

  const ptyLabel = (c) =>
    ({
      0: "맑음",
      1: "비",
      2: "비/눈",
      3: "눈",
      5: "빗방울",
      6: "빗눈",
      7: "눈날림",
    }[c] ?? "—");

  return (
    <div
      style={{
        height: "180px",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f7f7fa",
      }}
    >
      <div
        style={{
          minWidth: 220,
          padding: "14px 16px",
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 8px 20px rgba(0,0,0,.1)",
          textAlign: "center",
          lineHeight: 1.4,
        }}
      >
        <div style={{ fontSize: 14, color: "#666", marginBottom: 6 }}>
          현재 천안의 날씨
        </div>
        {err && <div style={{ color: "crimson", fontSize: 13 }}>{err}</div>}
        {!data && !err && (
          <div style={{ fontSize: 13, color: "#666" }}>불러오는 중...</div>
        )}
        {data && (
          <>
            <div style={{ fontSize: 28, fontWeight: 800 }}>{data.temp}℃</div>
            <div style={{ marginTop: 4 }}>{ptyLabel(data.pty)}</div>
            <div style={{ marginTop: 4, fontSize: 13, color: "#555" }}>
              습도 {data.humidity}% · 풍속 {data.wind} m/s
            </div>
            {data.rain1h > 0 && (
              <div style={{ marginTop: 4, fontSize: 13, color: "#1e88e5" }}>
                1시간 강수 {data.rain1h} mm
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
