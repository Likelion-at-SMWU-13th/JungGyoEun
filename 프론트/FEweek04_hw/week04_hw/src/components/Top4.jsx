import React from "react";
import top4 from "../assets/top4.webp";
import number4 from "../assets/4.png";

const Top4 = () => {
  return (
    <div>
      <img src={number4} style={{ width: "60px" }} />
      <img src={top4} style={{ width: "180px" }} />
    </div>
  );
};

export default Top4;
