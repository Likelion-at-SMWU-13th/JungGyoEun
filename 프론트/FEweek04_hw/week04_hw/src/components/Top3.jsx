import React from "react";
import top3 from "../assets/top3.webp";
import number3 from "../assets/3.png";
import styled from "styled-components";

const Box = styled.div`
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-15px);
  }
`;
const Top3 = () => {
  return (
    <Box>
      <img src={number3} style={{ width: "60px" }} />
      <img src={top3} style={{ width: "180px" }} />
    </Box>
  );
};

export default Top3;
