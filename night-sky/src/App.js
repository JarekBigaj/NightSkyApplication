import NightSkyWeather from "./NightSkyWeather";
import ListOfStars from "./pages/listOfStars";
import ConstellationInfoCard from "./pages/infoElements/constellationInfoCard";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import StarInfoCard from "./pages/infoElements/starInfoCard";
import {Route, Routes} from "react-router-dom"
import ListOfConstellations from  "./pages/listOfConstellations"

function App() {

  return (
    <div>
      <Navbar/>
      <NightSkyWeather/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ListOfStars" element={<ListOfStars/>}/>
          <Route path="/ListOfConstellations" element={<ListOfConstellations/>}/>
          <Route path="/starInfoCard" element={<StarInfoCard/>}/>
          <Route path="/constellationInfoCard" element={<ConstellationInfoCard/>}/>
        </Routes>
      </div>
    </div>
  );
}


export default App;
