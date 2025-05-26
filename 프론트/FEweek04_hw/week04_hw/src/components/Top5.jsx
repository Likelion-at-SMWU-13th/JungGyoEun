import React from "react";
import top5 from "../assets/top5.webp";
import number5 from "../assets/5.png";
import styled from "styled-components";

const Box = styled.div`
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-15px);
  }
`;
const Top5 = () => {
  return (
    <Box>
      <img src={number5} style={{ width: "60px" }} />
      <img src={top5} style={{ width: "180px" }} />
    </Box>
  );
};

export default Top5;
