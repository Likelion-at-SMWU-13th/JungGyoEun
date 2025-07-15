import React from "react";
import KakaoImg from "./assets/kakao_login.png";
import GoogleImg from "./assets/google_login.png";

const Login = () => {
  // Oauth 2.0 동작 매커니즘 (2) Authorization Request 권한 요청,  (3) User Authentication & Consent (사용자 인증 및 권한 승인), (4) Authorization Code 발급/리다이렉션  단계에 해당
  // 클라이언트가 권한 서버에 특정한 정보를 포함한 권한 요청을 보냅니다.
  // 사용자는 요청된 권한 범위를 확인한 후, 승인 여부를 결정합니다.
  // 현재 코드에서 특정한 정보에는 Response type(요청 응답 타입), Client ID, Redirect URI를 포함했습니다.
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;

  /*
  https://kauth.kakao.com/oauth/authorize? : 카카오 인증 서버 주소이고, 사용자를 로그인 창으로 보내기 위해 사용됩니다.

  response_type=code : 요청 응답 타입을 code라고 설정하는 것은 인가 코드 방식으로 로그인 하겠다는 의미이며, 카카오에 Aythorization code(인가 코드)를 요청합니다.
  나중에 이 코드로 access token도 요청이 가능합니다.
  
  clientID는 카카오에게 우리가 어떤 앱(developer에서 등록한 앱)인지 구별하는 데에 쓰이는 값입니다. 
  ${import.meta.env.VITE_REST_API_KEY}는 .env 파일에 정의한 환경변수인 VITE_REST_API_KEY의 값을 가져오는 코드입니다.
  카카오 developer에서 발급받은 REST API 키(a85d3cd72c7d6e07fa8bc3d4f840ebf2)를 사용하여 카카오 서버에 요청을 보냅니다.

  redirect_uri는 카카오 인증 서버가 인가 코드를 발급한 후, 즉 로그인 완료 후 사용자를 리다이렉트할 URI입니다.
  ${import.meta.env.VITE_REDIRECT_URI는 .env 파일에 정의한 환경변수인 VITE_REDIRECT_URI의 값을 가져오는 코드입니다.
  우리는 .env 파일에서 http://localhost:5173/oauth2로 설정했고, 카카오는 자동으로 인가코드를 붙여서 돌려준다.
  예를 들어, http://localhost:5173/oauth2?code=인증코드와 같은 형태로 리다이렉트됩니다.


  */

  const handleKakao = () => {
    // 카카오 로그인 버튼을 클릭했을 때 실행되는 함수입니다.
    // 카카오 인증 서버에 요청을 보내기 위해서 window.location.href를 사용합니다.
    window.location.href = authServerLink;
  };

  return (
    <div className="login-box">
      <h2>로그인</h2>
      <div className="btns-container">
        <button className="kakao-btn" onClick={handleKakao}>
          {" "}
          // kakao-btn 클릭 시 handleKakao 함수 실행{" "}
          <img src={KakaoImg} alt="kakao_button" />
        </button>
        <button>
          {"  "}
          <img src={GoogleImg} alt="google_button" />
        </button>
      </div>
    </div>
  );
};

export default Login;
