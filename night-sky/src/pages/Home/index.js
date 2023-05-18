import styled from "styled-components";
import AddConstellation from "../addConstellation"
import AddStar from "../addStar"

const Home = styled(({className}) => {

    return (
        <div className={className}>
            <h1>Home</h1>
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