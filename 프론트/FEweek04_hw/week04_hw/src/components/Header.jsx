import React from "react";
import logo from "../assets/logo.svg";
import profile from "../assets/profile.jpeg";
import "../styles/header.css";

const Header = () => {
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
        <aside>
          <img src={profile} className="profile" style={{ width: "30px" }} />
        </aside>
      </nav>
    </header>
  );
};

export default Header;
