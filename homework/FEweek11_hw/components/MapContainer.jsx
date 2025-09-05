import KakaoMap from "./KakaoMap";
import * as S from "./MapContainer.Styled";

const MapContainer = () => {
  return (
    <>
      <S.Wrapper>
        <S.MapContainer>
          <KakaoMap />;
        </S.MapContainer>
      </S.Wrapper>
      ;
    </>
  );
};

export default MapContainer;
