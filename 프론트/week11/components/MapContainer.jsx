import KakaoMap from "./KakaoMap";
import * as S from "./styled";

const MapContainer = ({ title }) => {
  return (
    <S.Wrapper>
      <S.H1>{title}</S.H1>
      <KakaoMap />
    </S.Wrapper>
  );
};

export default MapContainer;
