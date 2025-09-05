import { useState } from "react";
import KakaoMap from "./KakaoMap";
import * as S from "./styled";
import useKakaoShare from "../src/hooks/useKakaoShare";

const MapContainer = ({ title }) => {
  const [center, setCenter] = useState({ lat: 33.450701, lng: 126.570667 });
  const [isMarker, setIsMarker] = useState(false);
  const { shareKakaoLocation } = useKakaoShare();

  const handleShareMyLocation = () => {
    shareKakaoLocation(center);
  };

  const handleFindMyLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;
      setCenter({ lat, lng });
      setIsMarker(true);
    });
  };

  return (
    <S.Wrapper>
      <S.H1>{title}</S.H1>
      <S.BtnContainer>
        <S.ShareBtn onClick={handleShareMyLocation}>
          내 위치 공유하기
        </S.ShareBtn>
        <S.FindBtn onClick={handleFindMyLocation}>현재 내 위치 찾기</S.FindBtn>
      </S.BtnContainer>
      <KakaoMap center={center} isMarker={isMarker} />
    </S.Wrapper>
  );
};

export default MapContainer;
