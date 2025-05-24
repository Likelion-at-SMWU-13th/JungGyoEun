import React, { useState } from "react";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.jpeg";
import "../styles/header.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="header">
      <img
        className="logo"
        src={logo}
        style={{
          width: "150px",
        }}
      />
      <nav>
        <ul>
          <li>드라마</li>
          <li>예능</li>
          <li>영화</li>
          <li>스포츠</li>
          <li>애니</li>
          <li>뉴스</li>
        </ul>
      </nav>

      {isLoggedIn ? (
        <img src={profile} className="profile" />
      ) : (
        <button className="login-btn" onClick={() => setIsLoggedIn(true)}>
          로그인
        </button>
      )}
    </header>
  );
};

export default Header;
