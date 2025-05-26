import React from "react";
import top4 from "../assets/top4.webp";
import number4 from "../assets/4.png";
import styled from "styled-components";

const Box = styled.div`
  transition: all 0.4s ease;
  &:hover {
    transform: translateY(-15px);
  }
`;
const Top4 = () => {
  return (
    <Box>
      <img src={number4} style={{ width: "60px" }} />
      <img src={top4} style={{ width: "180px" }} />
    </Box>
  );
};

export default Top4;
