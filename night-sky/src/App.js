import NightSkyWeather from "./NightSkyWeather";
import ListOfStars from "./pages/listOfStars";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <div>
      <Navbar/>
      <NightSkyWeather/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/ListOfStars" element={<ListOfStars/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </div>
  );
}


export default App;
