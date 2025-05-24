import React from "react";
import box3 from "../assets/box3.webp";
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

const ChannelBox3 = () => {
  return (
    <Box className="imageBox">
      <img src={box3} style={{ width: "100px", backgroundColor: "#1c1c1c" }} />
    </Box>
  );
};

export default ChannelBox3;
