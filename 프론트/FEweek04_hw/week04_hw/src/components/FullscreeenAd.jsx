import React from "react";
import MainImg from "../assets/fullImage.png";
const FullscreeenAd = () => {
  return (
    <div>
      <img
        src={MainImg}
        alt="FullScreenAdImg"
        style={{
          width: "1410px",
          display: "flex",
          justifyContent: "left",
          padding: "0",
          marginLeft: "20px",
        }}
      />
    </div>
  );
};

export default FullscreeenAd;
