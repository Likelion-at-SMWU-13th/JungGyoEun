import "./KakaoMap.css";

// KakaoMap.jsx
import { Map, MapMarker, CustomOverlayMap } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 36.805129, lng: 127.1308939 }}
      level={7}
      style={{ width: "800px", height: "635px" }}
    >
      {/*카페1*/}
      <MapMarker
        position={{ lat: 36.7730532058072, lng: 127.139546619755 }}
        image={{
          src: "public/marker-pink.png",
          size: {
            width: 50,
            height: 50,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.7730532058072, lng: 127.139546619755 }}
        yAnchor={1}
      >
        <div className="customoverlay cafe">
          <a
            href="https://kko.kakao.com/Mvdyzrrc5q"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">뚜쥬르 돌가마점</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*카페2*/}
      <MapMarker
        position={{ lat: 36.8174658014083, lng: 127.156081953031 }}
        image={{
          src: "public/marker-pink.png",
          size: {
            width: 50,
            height: 50,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.8174658014083, lng: 127.156081953031 }}
        yAnchor={1}
      >
        <div className="customoverlay cafe">
          <a
            href="https://kko.kakao.com/9gc4UlFD9m"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">브루어스커피</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*카페3*/}
      <MapMarker
        position={{ lat: 36.8169716641493, lng: 127.108606505071 }}
        image={{
          src: "public/marker-pink.png",
          size: {
            width: 50,
            height: 50,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.8169716641493, lng: 127.108606505071 }}
        yAnchor={1}
      >
        <div className="customoverlay cafe">
          <a
            href="https://kko.kakao.com/gtgBsE_P1m"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">소금도화</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*카페4*/}
      <MapMarker
        position={{ lat: 36.8099244771819, lng: 127.104953158751 }}
        image={{
          src: "public/marker-pink.png",
          size: {
            width: 50,
            height: 50,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.8099244771819, lng: 127.104953158751 }}
        yAnchor={1}
      >
        <div className="customoverlay cafe">
          <a
            href="https://kko.kakao.com/0MLQJjnp_x"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">yyyy</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*술1*/}
      <MapMarker
        position={{ lat: 36.81715566337, lng: 127.154753772351 }}
        image={{
          src: "public/marker-blue.png",
          size: {
            width: 60,
            height: 60,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.81715566337, lng: 127.154753772351 }}
        yAnchor={1}
      >
        <div className="customoverlay alcohol">
          <a
            href="https://kko.kakao.com/Mvdyzrrc5q"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">하프스탠드비어바</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*술2*/}
      <MapMarker
        position={{ lat: 36.8111094320273, lng: 127.107082390136 }}
        image={{
          src: "public/marker-blue.png",
          size: {
            width: 60,
            height: 60,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.8111094320273, lng: 127.107082390136 }}
        yAnchor={1}
      >
        <div className="customoverlay alcohol">
          <a
            href="https://kko.kakao.com/Mvdyzrrc5q"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">쇼넨</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*술3*/}
      <MapMarker
        position={{ lat: 36.8336534938228, lng: 127.134466340664 }}
        image={{
          src: "public/marker-blue.png",
          size: {
            width: 60,
            height: 60,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.8336534938228, lng: 127.134466340664 }}
        yAnchor={1}
      >
        <div className="customoverlay alcohol">
          <a href="https://kko.to/j6i8jqvhra" target="_blank" rel="noreferrer">
            <span className="title">오키나와펍시사</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*밥1*/}
      <MapMarker
        position={{ lat: 36.8309076394909, lng: 127.135181982328 }}
        image={{
          src: "public/marker-green.png",
          size: {
            width: 40,
            height: 40,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.8309076394909, lng: 127.135181982328 }}
        yAnchor={1}
      >
        <div className="customoverlay food">
          <a
            href="https://kko.kakao.com/2EnHvtO6EC"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">곤드레찜드레 곤찜</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*밥2*/}
      <MapMarker
        position={{ lat: 36.811518030837, lng: 127.101493305993 }}
        image={{
          src: "public/marker-green.png",
          size: {
            width: 40,
            height: 40,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.811518030837, lng: 127.101493305993 }}
        yAnchor={1}
      >
        <div className="customoverlay food">
          <a
            href="https://kko.kakao.com/Ac6tGSOGhX"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">일이이사</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*밥3*/}
      <MapMarker
        position={{ lat: 36.820537569738, lng: 127.188215320966 }}
        image={{
          src: "public/marker-green.png",
          size: {
            width: 40,
            height: 40,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.820537569738, lng: 127.188215320966 }}
        yAnchor={1}
      >
        <div className="customoverlay food">
          <a
            href="https://kko.kakao.com/5xcVrGRtvD"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">이고집만두</span>
          </a>
        </div>
      </CustomOverlayMap>

      {/*밥3*/}
      <MapMarker
        position={{ lat: 36.810330226827, lng: 127.104156579858 }}
        image={{
          src: "public/marker-green.png",
          size: {
            width: 40,
            height: 40,
          },
        }}
      />
      <CustomOverlayMap
        position={{ lat: 36.810330226827, lng: 127.104156579858 }}
        yAnchor={1}
      >
        <div className="customoverlay food">
          <a
            href="https://kko.kakao.com/BazFBX249J"
            target="_blank"
            rel="noreferrer"
          >
            <span className="title">팔팔닭떡볶이</span>
          </a>
        </div>
      </CustomOverlayMap>
    </Map>
  );
};

export default KakaoMap;
