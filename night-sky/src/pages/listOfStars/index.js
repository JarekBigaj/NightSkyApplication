import { useState,useMemo, useEffect } from "react";
import Pagination from "../../helperFunctions/Pagination";
import { ThemeProvider } from "styled-components";
import Table from "../../helperComponents/TableOfElements";

const API_GET_STARS_LIST = `http://localhost:3600/api/stars/getAllDataStars`;

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
    const [currentPage, setCurrentPage] = useState(1);

    const getStarsList = async () =>{
        const response = await fetch(API_GET_STARS_LIST);
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
                constellationId: value.constellationId
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