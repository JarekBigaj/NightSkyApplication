import { API_GET_CONSTELLATION_DATA } from "../server";

const getConstellations = async (id) =>{
    const response = await fetch(`${API_GET_CONSTELLATION_DATA}?id=${id}`);
    if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
    const json = await response.json();
    return json;
}



export const getDataConstellation = async (id) =>{
    try{
        const response = await getConstellations(id);
        return response;
    } catch (error) {
        return console.log(error);
    }

}
