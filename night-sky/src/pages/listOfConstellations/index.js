import Table from "../../helperComponents/TableOfElements";
import {ThemeProvider} from "styled-components";
import Pagination from "../../helperFunctions/Pagination";
import { useState, useEffect,useMemo } from "react";

const API_GET_CONSTELLATIONS_LIST = "http://127.0.0.1:3600/api/constellations/getAllDataConstellations"

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

export default function ListOfConstellations (){
    
    const [constellationsData, setConstellationsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getConstellationsList = async () =>{
        const response = await fetch(API_GET_CONSTELLATIONS_LIST);
        if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
        const json = await response.json();
        return json;
    }

    const selectedData = (response) => {
        return response.map(value => {
            return {
                id: value.id,
                name: value.name,
            }
        })
    }

    useEffect(() => {
        (async () =>{
            try{
                const response = await getConstellationsList();
                setConstellationsData(selectedData(response));
            } catch (error) {
                console.log(error);
            }
        })()
    },[])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return constellationsData.slice(firstPageIndex, lastPageIndex);
      }, [currentPage,constellationsData]);

   
    
    const ConstellationsProperties = ["Name"];
    return (
        <div>
        <ThemeProvider theme={theme}>
            <Table props={currentTableData} passedNameProperties={ConstellationsProperties}/>
        </ThemeProvider>
        <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={constellationsData.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
        />
    </div>
    )
}