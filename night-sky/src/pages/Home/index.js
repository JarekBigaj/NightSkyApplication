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

    .button-wrapper{
        position: absolute;
        bottom:0;
        display:flex;
        align-content:center;
    }
`;

export default Home;