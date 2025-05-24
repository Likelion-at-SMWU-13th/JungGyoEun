import React from "react";
import top1 from "../assets/top1.webp";
import number1 from "../assets/1.png";

const Top1 = () => {
  return (
    <div>
      <img src={number1} style={{ width: "40px" }} />
      <img src={top1} style={{ width: "180px" }} />
    </div>
  );
};

export default Top1;
