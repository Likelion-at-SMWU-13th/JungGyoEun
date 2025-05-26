import React from "react";
import "./App.css";
import Header from "./components/Header";
import FullscreeenAd from "./components/FullscreeenAd";
import Channel from "./components/Channel";
import Top20 from "./components/Top20";
function App() {
  return (
    <>
      <Header />
      <FullscreeenAd />
      <Channel />
      <Top20 />
    </>
  );
}

export default App;
