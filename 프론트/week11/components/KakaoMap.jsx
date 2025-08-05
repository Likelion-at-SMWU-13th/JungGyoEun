import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 33.450701, lng: 126.570667 }}
      levet={3}
      style={{
        width: "500px",
        height: "400px",
        borderRadius: "1rem",
        boxShadow: "0px 0px 10px 4px rgba(38, 38, 38, 0.2)",
      }}
    ></Map>
  );
};

export default KakaoMap;
