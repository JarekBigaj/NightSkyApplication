import { API_GET_CONSTELLATION_LIST } from "../server";


const getConstellations = async () =>{
    const response = await fetch(API_GET_CONSTELLATION_LIST);
    if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
    const json = await response.json();
    return json;
}

const selectedConstellationsName = (response) =>{
    return response.map(value =>{
        return{
            id: value.id,
            name: value.name
        }
    })
}


export const listOfConstellation = async () =>{

    try{
        const response = await getConstellations();
        const constellationsName = await selectedConstellationsName(response);   
        return constellationsName;
    } catch (error) {
        return console.log(error);
    }

}

