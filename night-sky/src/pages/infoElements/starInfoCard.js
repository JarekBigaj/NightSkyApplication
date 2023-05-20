import { useEffect, useState } from "react";
import styled from "styled-components";
import CustomInfoCard from "./CustomInfoCard";

const API_GET_STAR_DATA = `http://127.0.0.1:3600/api/stars/getDataSelectedStar`
const API_GET_CONSTELLATION_DATA = `http://127.0.0.1:3600/api/constellations/getDataSelectedConstellation`

const StarInfoCard = styled(({className}) => {
    const [currentStarData,setCurrentStarData] = useState([]);
    const [constellationData,setConstellationData] = useState([]);

    const querryString = window.location.search;
    const urlParams = new URLSearchParams(querryString);
    const getStarId = urlParams.get('id');

    const getStarData = async () =>{
        const response = await fetch(`${API_GET_STAR_DATA}?id=${getStarId}`);
        if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
        const json = await response.json();
        return json;
    }

    const getConstellationData = async (constellationId) =>{
        const response = await fetch(`${API_GET_CONSTELLATION_DATA}?id=${constellationId}`);
        if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
        const json = await response.json();
        return json;
    } 

    useEffect(() => {
        (async () =>{
            try{
                const response = await getStarData();
                setCurrentStarData(response);
            } catch (error) {
                console.log(error);
            }
        })()
    },[])

    useEffect(() => {
        (async () =>{
            try{
                const constellationId = currentStarData.constellationId;
                const response = await getConstellationData(constellationId);
                setConstellationData(response);
            } catch (error) {
                console.log(error);
            }
        })()
    },[currentStarData])


    return (
        <CustomInfoCard starProps={currentStarData} constellationProps={constellationData}/>
    )
})`

`;

export default StarInfoCard;