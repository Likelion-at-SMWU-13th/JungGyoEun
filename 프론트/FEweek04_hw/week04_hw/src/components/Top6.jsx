import React from "react";
import top6 from "../assets/top6.webp";
import number6 from "../assets/6.png";

const Top6 = () => {
  return (
    <div>
      <img src={number6} style={{ width: "60px" }} />
      <img src={top6} style={{ width: "180px" }} />
    </div>
  );
};

export default Top6;
