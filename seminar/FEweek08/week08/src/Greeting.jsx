import React, { useEffect, useState } from "react";

const Greeting = () => {
  // Oauth 2.0 동작 매커니즘 (6) Access Token을 이용한 자원 요청에 해당합니다.
  const [name, setName] = useState(); // 로그인한 사용자의 이름을 저장하는 상태 변수입니다.
  const [profileImg, setProfileImg] = useState(); // 로그인한 사용자의 프로필 이미지를 저장하는 상태 변수입니다.

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    fetch("https://kapi.kakao.com/v2/user/me", {
      // 로그인한 사용자의 프로필 정보를 요청합니다.
      method: "GET", // GET 방식으로 요청을 보냅니다.
      headers: {
        // 카카오 API에서 사용자 정보를 가져오기 위해 localStorage에서 저장된 access token을 가져와서 Authorization 헤더에 포함시킵니다.
        Authorization: `Bearer ${accessToken}`, // 저장된 access token을 불러옵니다.
        "Content-type": "application/x-www-form-urlencoded", // 요청 헤더에 Content-Type을 설정합니다. OAuth 2.0의 표준 요청 형식에 맞추기 위함입니다.
      },
    }).then((res) => {
      // 카카오 API에서 받은 응답을 처리합니다.
      // res.json()은 Promise를 반환하므로, then 메서드를 사용하여 데이터를 처리합니다.
      const userData = res.json(); // 이때, 사용자 정보는 JSON 형식으로 반환됩니다.
      userData.then((user) => {
        // userData는 Promise를 반환하므로, then 메서드를 사용하여 데이터를 처리합니다.
        setName(user.properties.nickname); // 사용자 이름을 상태 변수에 저장합니다.
        setProfileImg(user.properties.profile_image); // 사용자 프로필 이미지를 상태 변수에 저장합니다.
        // setName과 setProfileImg는 React의 useState를 사용하여 상태를 업데이트하는 함수입니다.
      });
    });
  }, []); // 빈배열이므로 컴포넌트가 처음 렌더링된 후 한 번만 실행됩니다.

  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }} // 프로필 이미지를 배경으로 설정합니다.
      ></div>
      <h2>{name}</h2>
    </div>
  );
};

export default Greeting;
