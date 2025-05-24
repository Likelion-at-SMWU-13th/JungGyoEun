import React from "react";
import top3 from "../assets/top3.webp";
import number3 from "../assets/3.png";

const Top3 = () => {
  return (
    <div>
      <img src={number3} style={{ width: "60px" }} />
      <img src={top3} style={{ width: "180px" }} />
    </div>
  );
};

export default Top3;
