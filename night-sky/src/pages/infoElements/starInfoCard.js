import { useEffect, useState } from "react";
import styled from "styled-components";

const API_GET_STAR_DATA = `http://127.0.0.1:3600/api/stars/getDataSelectedStar`

const StarInfoCard = styled(({className}) => {
    const [currentStarData,setCurrentStateData] = useState();

    const querryString = window.location.search;
    const urlParams = new URLSearchParams(querryString);
    const getStarId = urlParams.get('id');

    console.log(getStarId)

    const getData = async () =>{
        const response = await fetch(`${API_GET_STAR_DATA}?id=${getStarId}`);
        if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
        const json = await response.json();
        return json;
    }

    console.log(`${API_GET_STAR_DATA}?id=${getStarId}`)

    useEffect(() => {
        (async () =>{
            try{
                const response = await getData();
                setCurrentStateData(response);
            } catch (error) {
                console.log(error);
            }
        })()
    },[])

    console.log(currentStarData)
    return (
        <span>123</span>
    )
})`

`;

export default StarInfoCard;