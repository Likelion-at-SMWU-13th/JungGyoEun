import React from "react";
import top1 from "../assets/top1.webp";
import number1 from "../assets/1.png";
import styled from "styled-components";

const Box = styled.div`
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-15px);
  }
`;
const Top = () => {
  return (
    <Box>
      <img src={number1} style={{ width: "40px" }} />
      <img src={top1} style={{ width: "180px" }} />
    </Box>
  );
};

export default Top;
