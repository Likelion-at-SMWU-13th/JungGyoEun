import React from "react";
import lion1 from "../assets/lion1.jpg";

const LionCard1 = () => {
  const isReal = true;

  return (
    <div style={{ textAlign: "center", color: "tomato" }}>
      <img
        src={lion1}
        style={{
          width: "150px",
          height: " 150px",
          borderRadius: "1rem",
          objectFit: "cover",
        }}
      />
      <h1>1번 사자</h1>
      <p>{isReal ? "진짜 아기사자" : "가짜 아기사자"}</p>
    </div>
  );
};

export default LionCard1;
