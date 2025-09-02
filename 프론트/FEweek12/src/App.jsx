import "./App.css";
import { Outlet } from "react-router-dom";
import ToggleBtn from "./components/ToggleBtn";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Outlet />
        <ToggleBtn />
      </ThemeProvider>
    </>
  );
}

export default App;
