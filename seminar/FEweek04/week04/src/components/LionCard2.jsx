import React from "react";
import lion2 from "../assets/lion2.jpg";
import "../styles/LionCard2.css";

const LionCard2 = () => {
  const isReal = true;
  return (
    <div className="lion-card lion-card2">
      <img src={lion2} className="lion-img" />
      <h1>2번 사자</h1>
      <p>{isReal ? "진짜 아기사자" : "가짜 아기사자"}</p>
    </div>
  );
};

export default LionCard2;
