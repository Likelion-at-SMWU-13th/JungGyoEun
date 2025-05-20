import React from "react";
import lion1 from "../assets/lion1.jpg";

const LionCard1 = () => {
  const isReal = true;
  return (
    <div>
      <img src={lion1} />
      <h1>1번 사자</h1>
      <p>{isReal ? "진짜 아기사자" : "가짜 아기사자"}</p>
    </div>
  );
};

export default LionCard1;
