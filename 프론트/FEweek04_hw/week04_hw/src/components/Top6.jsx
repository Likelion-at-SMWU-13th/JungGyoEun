import React from "react";
import top6 from "../assets/top6.webp";
import number6 from "../assets/6.png";
import styled from "styled-components";

const Box = styled.div`
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-15px);
  }
`;
const Top6 = () => {
  return (
    <Box>
      <img src={number6} style={{ width: "60px" }} />
      <img src={top6} style={{ width: "180px" }} />
    </Box>
  );
};

export default Top6;
