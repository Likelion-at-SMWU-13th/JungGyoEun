import React from "react";
import top2 from "../assets/top2.webp";
import number2 from "../assets/2.png";
import styled from "styled-components";

const Box = styled.div`
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-15px);
  }
`;
const Top2 = () => {
  return (
    <Box>
      <img src={number2} style={{ width: "60px" }} />
      <img src={top2} style={{ width: "180px" }} />
    </Box>
  );
};

export default Top2;
