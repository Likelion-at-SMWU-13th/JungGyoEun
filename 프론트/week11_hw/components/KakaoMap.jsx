import "./KakaoMap.css";
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

const PLACES = [
  // 카페
  {
    type: "cafe",
    title: "뚜쥬르 돌가마점",
    lat: 36.7730532058072,
    lng: 127.139546619755,
    icon: { src: "/marker-pink.png", w: 50, h: 50 },
    link: "https://kko.kakao.com/Mvdyzrrc5q",
  },
  {
    type: "cafe",
    title: "브루어스커피",
    lat: 36.8174658014083,
    lng: 127.156081953031,
    icon: { src: "/marker-pink.png", w: 50, h: 50 },
    link: "https://kko.kakao.com/9gc4UlFD9m",
  },
  {
    type: "cafe",
    title: "소금도화",
    lat: 36.8169716641493,
    lng: 127.108606505071,
    icon: { src: "/marker-pink.png", w: 50, h: 50 },
    link: "https://kko.kakao.com/gtgBsE_P1m",
  },
  {
    type: "cafe",
    title: "yyyy",
    lat: 36.8099244771819,
    lng: 127.104953158751,
    icon: { src: "/marker-pink.png", w: 50, h: 50 },
    link: "https://kko.kakao.com/0MLQJjnp_x",
  },

  // 술
  {
    type: "alcohol",
    title: "하프스탠드비어바",
    lat: 36.81715566337,
    lng: 127.154753772351,
    icon: { src: "/marker-blue.png", w: 60, h: 60 },
    link: "https://kko.kakao.com/Mvdyzrrc5q",
  },
  {
    type: "alcohol",
    title: "쇼넨",
    lat: 36.8111094320273,
    lng: 127.107082390136,
    icon: { src: "/marker-blue.png", w: 60, h: 60 },
    link: "https://kko.kakao.com/Mvdyzrrc5q",
  },
  {
    type: "alcohol",
    title: "오키나와펍시사",
    lat: 36.8336534938228,
    lng: 127.134466340664,
    icon: { src: "/marker-blue.png", w: 60, h: 60 },
    link: "https://kko.to/j6i8jqvhra",
  },

  // 밥
  {
    type: "food",
    title: "곤드레찜드레 곤찜",
    lat: 36.8309076394909,
    lng: 127.135181982328,
    icon: { src: "/marker-green.png", w: 40, h: 40 },
    link: "https://kko.kakao.com/2EnHvtO6EC",
  },
  {
    type: "food",
    title: "일이이사",
    lat: 36.811518030837,
    lng: 127.101493305993,
    icon: { src: "/marker-green.png", w: 40, h: 40 },
    link: "https://kko.kakao.com/Ac6tGSOGhX",
  },
  {
    type: "food",
    title: "이고집만두",
    lat: 36.820537569738,
    lng: 127.188215320966,
    icon: { src: "/marker-green.png", w: 40, h: 40 },
    link: "https://kko.kakao.com/5xcVrGRtvD",
  },
  {
    type: "food",
    title: "팔팔닭떡볶이",
    lat: 36.810330226827,
    lng: 127.104156579858,
    icon: { src: "/marker-green.png", w: 40, h: 40 },
    link: "https://kko.kakao.com/BazFBX249J",
  },
];

export default function KakaoMap() {
  return (
    <Map
      center={{ lat: 36.805129, lng: 127.1308939 }}
      level={7}
      style={{ width: "800px", height: "600px", borderRadius: "1rem" }}
    >
      {PLACES.map((p, i) => (
        <MarkerWithOverlay key={`${p.type}-${i}`} place={p} />
      ))}
    </Map>
  );
}

function MarkerWithOverlay({ place }) {
  return (
    <>
      <MapMarker
        position={{ lat: place.lat, lng: place.lng }}
        image={{
          src: place.icon.src,
          size: { width: place.icon.w, height: place.icon.h },
        }}
      />
      <CustomOverlayMap
        position={{ lat: place.lat, lng: place.lng }}
        yAnchor={1}
      >
        <div className={`customoverlay ${place.type}`}>
          <a href={place.link} target="_blank" rel="noreferrer">
            <span className="title">{place.title}</span>
          </a>
        </div>
      </CustomOverlayMap>
    </>
  );
}
