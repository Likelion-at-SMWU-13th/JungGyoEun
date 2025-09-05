import MapContainer from "../components/MapContainer";
import "./App.css";
import WeatherNow from "../components/WeatherNow";
import Header from "../components/Header";

function App() {
  return (
    <>
      <Header />
      <WeatherNow />
      <MapContainer />
    </>
  );
}

export default App;
