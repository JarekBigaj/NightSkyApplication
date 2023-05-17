import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const StarInfoCard = styled(({className}) => {
    const [currentStarData,setCurrentStateData] = useState();

    const querryString = window.location.search;
    const urlParams = new URLSearchParams(querryString);
    const getStarId = urlParams.get('id');
    console.log(getStarId)


    useEffect(()=>{

    },[])

    return (
        <span>123</span>
    )
})`

`;

export default StarInfoCard;