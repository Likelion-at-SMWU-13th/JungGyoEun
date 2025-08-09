import "./KakaoMap.css";

// KakaoMap.jsx
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 36.815129, lng: 127.1138939 }}
      level={9}
      style={{ width: "390px", height: "635px" }}
    >
      <MapMarker position={{ lat: 36.7730532058072, lng: 127.139546619755 }} />
      <CustomOverlayMap
        position={{ lat: 36.7730532058072, lng: 127.139546619755 }}
        yAnchor={1}
      >
        <div className="customoverlay">
          <a
            href="https://kko.kakao.com/Mvdyzrrc5q"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">뚜쥬르 돌가마점</span>
          </a>
        </div>
      </CustomOverlayMap>
    </Map>
  );
};

export default KakaoMap;
