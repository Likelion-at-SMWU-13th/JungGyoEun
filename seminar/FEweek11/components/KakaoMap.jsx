import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoMap = ({ center, isMarker }) => {
  return (
    <Map
      center={center}
      levet={3}
      style={{
        width: "500px",
        height: "400px",
        borderRadius: "1rem",
        boxShadow: "0px 0px 10px 4px rgba(38, 38, 38, 0.2)",
      }}
    >
      {isMarker && <MapMarker position={center}></MapMarker>}
    </Map>
  );
};

export default KakaoMap;
