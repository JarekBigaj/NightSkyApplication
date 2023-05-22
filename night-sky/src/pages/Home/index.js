import styled from "styled-components";
import NightSkyWeather from "../../NightSkyWeather";
import AddConstellation from "../addConstellation"
import AddStar from "../addStar"

const Home = styled(({className}) => {

    return (
        <div className={className}>
            <NightSkyWeather/>
            <div className="button-wrapper">
                <AddStar/>
                <AddConstellation/>
            </div>
        </div>
    )

})`
.button-wrapper {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: grid;
    grid-template-columns: 1fr 1fr; /* Adjust the column widths as needed */
    justify-items: center; /* Center the buttons horizontally within each column */
    gap: 10px; /* Adjust the gap between buttons as desired */
  }
`;

export default Home;