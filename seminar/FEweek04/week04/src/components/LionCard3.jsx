import React from "react";
import lion3 from "../assets/lion3.png";
import styled from "styled-components";

const Card = styled.div`
  text-align: center;
  color: green;
`;

const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 1rem;
  object-fit: cover;
`;

const LionCard3 = () => {
  const isReal = false;
  return (
    <Card>
      <Img src={lion3} />
      <h1>3번 사자</h1>
      <p>{isReal ? "진짜 아기사자" : "가짜 아기사자"}</p>
    </Card>
  );
};

export default LionCard3;
