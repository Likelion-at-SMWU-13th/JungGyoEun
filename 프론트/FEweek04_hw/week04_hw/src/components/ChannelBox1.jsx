import React from "react";
import box1 from "../assets/box1.webp";
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
`;

const ChannelBox1 = () => {
  return (
    <Box className="imageBox">
      <img src={box1} style={{ width: "100px", backgroundColor: "#1c1c1c" }} />
    </Box>
  );
};

export default ChannelBox1;
