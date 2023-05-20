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
        position:absolute;
        display:flex;
        bottom:0;
        width:100%;
    }
`;

export default Home;