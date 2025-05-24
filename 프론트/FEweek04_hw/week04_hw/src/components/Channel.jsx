import React from "react";
import ChannelBox1 from "./ChannelBox1";
import ChannelBox2 from "./ChannelBox2";
import ChannelBox3 from "./ChannelBox3";
import ChannelBox4 from "./ChannelBox4";
import ChannelBox5 from "./ChannelBox5";

const Channel = () => {
  return (
    <div
      style={{
        display: "flex",
        marginLeft: "20px",
        overflowX: "auto",
        gap: "15px",
        marginTop: "30px",
      }}
    >
      <ChannelBox1 />
      <ChannelBox2 />
      <ChannelBox3 />
      <ChannelBox4 />
      <ChannelBox5 />
    </div>
  );
};

export default Channel;
