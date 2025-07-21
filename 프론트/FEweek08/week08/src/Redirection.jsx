import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  // Oauth 2.0 동작 매커니즘 (4) Access Token 요청 단계에 해당합니다.
  const [params] = useSearchParams(); // useSearchParams 훅을 사용해 카카오 인증 서버에서 전달된 URL에서 ?뒤의 값을 가져옵니다.
  const authCode = params.get("code"); // params에서 .get 메서드를 이용해 key값이 "code"인 값을 가져옵니다.
  const grant_type = "authorization_code"; // 인가 코드를 사용해서 access token을 요청하겠다는 의미입니다.
  const navigate = useNavigate(); // useNavigate을 사용하여 페이지를 이동할 수 있도록 합니다.

  useEffect(() => {
    fetch(
      // 카카오에 access token을 요청하는 fetch API를 사용합니다.
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${
        import.meta.env.VITE_REST_API_KEY
      }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}&code=${authCode}`,
      // grant_type=${grant_type}는 인가 코드를 사용해서 access token을 요청하겠다는 의미입니다.
      // code=${authCode}는 카카오 인증 서버에서 전달된 인가 코드입니다.
      // client_id, redirect_uri는 Login.jsx에서 설명한 것과 동일합니다.
      {
        method: "POST", // POST 방식으로 요청을 보냅니다.
        headers: {
          // 요청 헤더에 Content-Type을 설정합니다. OAuth 2.0의 표준 요청 형식에 맞추기 위해 아래와 같이 설정합니다.
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      const data = res.json(); // 카카오에서 받은 응답을 JSON 형식으로 변환합니다.
      data.then((data) => {
        // res.json()은 Promise를 반환하므로, then 메서드를 사용하여 데이터를 처리합니다.
        localStorage.setItem("accessToken", data.access_token); //data에 access_token이라는 key 값을 가진 데이터를 value로, accessToken이 key값인 ket-value 쌍을 localStorage에 setItem 메서드로 저장합니다.
        navigate("/greeting"); // access token을 저장한 후, /greeting 페이지로 이동합니다.
      });
    });
  }, [authCode, grant_type, navigate]); // 배열 내부 값이 변경되었을 때 userEffect는 리렌더링됩니다.

  return <div>Redirection Page: 로그인 중…</div>;
};

export default Redirection;
