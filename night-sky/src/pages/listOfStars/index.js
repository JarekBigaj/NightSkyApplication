import { useState,useMemo, useEffect } from "react";
import Pagination from "../../helperFunctions/Pagination";
import { ThemeProvider } from "styled-components";
import Table from "../../helperComponents/TableOfElements";
import {API_GET_CONSTELLATION_LIST,API_GET_STARS_LIST } from "../../server";

const PageSize = 3;

const theme = {
    colors: {
      grey: '#8a8a8a',
      greyLighter: '#c5c5c5',
      primary: '#007bff',
      white: '#ffffff',
      dark: '#343a40',
    }
};
  

function ListOfStars(){
    const [starsData, setStarsData] = useState([]);
    const [constellationsName,setConstellationsName] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getStarsList = async () =>{
        const response = await fetch(API_GET_STARS_LIST);
        if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
        const json = await response.json();
        return json;
    }

    const getConstellations = async () =>{
        const response = await fetch(API_GET_CONSTELLATION_LIST);
        if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
        const json = await response.json();
        return json;
    }

// TODO : make this function more universal for other elements.
    const selectedData = (response) => {
        return response.map(value => {
            return {
                id: value.id,
                name: value.name,
                constellation: value.constellationId,
            }
        })
    }
    const selectedConstellationsName = (response) =>{
        return response.map(value =>{
            return{
                id: value.id,
                name: value.name
            }
        })
    }

    useEffect(() => {
        (async () =>{
            try{
                const response = await getStarsList();
                setStarsData(selectedData(response));
            } catch (error) {
                console.log(error);
            }
        })()
    },[])

    useEffect(()=>{
        (async () => {
            try{
                const response = await getConstellations();
                setConstellationsName(selectedConstellationsName(response));
            } catch (error) {
                console.log(error);
            }
        })()
    },[starsData])

    const correctedStarsData = starsData.map(value => {
        constellationsName.forEach(element => {
            if(element.id === value.constellation) value.constellation = element.name;
        });
        return value;
    })

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return starsData.slice(firstPageIndex, lastPageIndex);
      }, [currentPage,starsData]);

    const starsProperties = ["Name","Constellation"];
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Table 
                    props={currentTableData} 
                    passedNameProperties={starsProperties}
                    to={"/starInfoCard"}
                />
            </ThemeProvider>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={starsData.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    )
}


export default ListOfStars;