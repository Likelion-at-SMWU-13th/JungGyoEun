import React from "react";
import KakaoImg from "./assets/kakao_login.png";
import GoogleImg from "./assets/google_login.png";

const Login = () => {
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
    import.meta.env.VITE_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;

  const handleKakao = () => {
    window.location.href = authServerLink;
  };

  return (
    <div className="login-box">
      <h2>로그인</h2>
      <div className="btns-container">
        <button className="kakao-btn" onClick={handleKakao}>
          {" "}
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
