import React from "react";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.jpeg";
import "../styles/header.css";

function Header() {
  let isLoggedIn = false;

  const handleLogin = () => {
    const container = document.getElementById("login-box");
    container.innerHTML = `<img src="${profile}" class="profile" />`;
  };

  return (
    <header className="header">
      <img className="logo" src={logo} style={{ width: "150px" }} />
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

      <div id="login-box">
        {isLoggedIn ? (
          <img src={profile} className="profile" />
        ) : (
          <button className="login-btn" onClick={handleLogin}>
            로그인
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
