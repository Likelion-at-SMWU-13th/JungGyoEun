import React from "react";
import top5 from "../assets/top5.webp";
import number5 from "../assets/5.png";

const Top5 = () => {
  return (
    <div>
      <img src={number5} style={{ width: "60px" }} />
      <img src={top5} style={{ width: "180px" }} />
    </div>
  );
};

export default Top5;
