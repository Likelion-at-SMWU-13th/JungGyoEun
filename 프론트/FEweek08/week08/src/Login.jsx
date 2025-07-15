import React from "react";
import KakaoImg from "./assets/kakao_login.png";
import GoogleImg from "./assets/google_login.png";

const Login = () => {
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?
  response_type=code&client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;

  const handleKakao = () => {
    window.location.href = authServerLink;
  };

  return (
    <div className="login-box">
      <h1>로그인</h1>
      <div className="btn-container">
        <button onClick={handleKakao}>
          <img src={KakaoImg} alt="카카오 로그인" />
        </button>
        <button>
          <img src={GoogleImg} alt="구글 로그인" />
        </button>
      </div>
    </div>
  );
};

export default Login;
