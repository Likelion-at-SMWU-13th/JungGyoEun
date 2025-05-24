import React from "react";
import Top1 from "./Top1";
import Top2 from "./Top2";
import Top3 from "./Top3";
import Top4 from "./Top4";
import Top5 from "./Top5";
import Top6 from "./Top6";

const Top20 = () => {
  return (
    <>
      <h2
        style={{
          marginLeft: "20px",
          marginTop: "30px",
          fontSize: "1.5rem",
        }}
      >
        오늘의 티빙 TOP20
      </h2>
      <div
        style={{
          display: "flex",
          marginLeft: "20px",
          overflowX: "auto",
          gap: "0",
          marginTop: "0",
        }}
      >
        <Top1 />
        <Top2 />
        <Top3 />
        <Top4 />
        <Top5 />
        <Top6 />
      </div>
    </>
  );
};

export default Top20;
