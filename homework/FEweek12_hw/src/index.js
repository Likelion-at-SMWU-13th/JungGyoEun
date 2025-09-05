import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MemberProvider from "./contexts/MemberContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemberProvider>
      <App />
    </MemberProvider>
  </React.StrictMode>
);
