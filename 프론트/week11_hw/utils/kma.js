export function toXY(lat, lon) {
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

export function baseForUltraNcst() {
  const kst = new Date(Date.now() + 9 * 3600 * 1000);
  kst.setMinutes(kst.getMinutes() - 40); // 발표 시각 안전 범위
  const y = kst.getFullYear(),
    m = String(kst.getMonth() + 1).padStart(2, "0"),
    d = String(kst.getDate()).padStart(2, "0");
  const hh = String(kst.getHours()).padStart(2, "0");
  return { base_date: `${y}${m}${d}`, base_time: `${hh}00` };
}
