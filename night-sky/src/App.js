import NightSkyWeather from "./NightSkyWeather";
import ListOfStars from "./pages/listOfStars";
import Navbar from "./Navbar";
import Home from "./pages/Home";

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <NightSkyWeather/>
      <ListOfStars/>
    </div>
  );
}


export default App;
