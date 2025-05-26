import React from "react";
import box4 from "../assets/box4.webp";
import styled from "styled-components";

const Box = styled.div`
  width: 270px;
  height: 100px;
  background-color: #1c1c1c;
  border-radius: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-15px);
`;

const ChannelBox4 = () => {
  return (
    <Box className="imageBox">
      <img src={box4} style={{ width: "100px", backgroundColor: "#1c1c1c" }} />
    </Box>
  );
};

export default ChannelBox4;
