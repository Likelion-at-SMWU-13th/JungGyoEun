import React from "react";
import lion2 from "../assets/lion1.jpg";

const LionCard2 = () => {
  const isReal = true;
  return (
    <div>
      <img src={lion2} />
      <h1>2번 사자</h1>
      <p>{isReal ? "진짜 아기사자" : "가짜 아기사자"}</p>
    </div>
  );
};

export default LionCard2;
