// src/components/Header.jsx
import React from "react";

export default function Header() {
  return (
    <header
      style={{
        textAlign: "center",
        padding: "16px 20px",
      }}
    >
      <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>
        천안 나들이 코스 추천
      </h1>
      <p style={{ margin: "6px 0 0", fontSize: 14, color: "#555" }}>
        천안의 날씨와 가볼만한 곳들을 추천해드릴게요!
      </p>
      <p style={{ margin: 0, fontSize: 14, color: "#777" }}>
        맛집, 카페, 마무리로 술집까지-~
      </p>
    </header>
  );
}
