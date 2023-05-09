import { useState,useMemo, useEffect } from "react";
import Pagination from "./Pagination";

const API_GET_STARS_LIST = `http://127.0.0.1:3600/starsList.json`;

const PageSize = 10;


function ListOfStars(){
    const [starsData, setStarsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getStarsList = async () =>{
        const response = await fetch(API_GET_STARS_LIST);
        if(!response.ok) throw new Error(`This is an HTTP error: The status is ${response.status}`);
        const json = await response.json();
        return json;
    }

    useEffect(() => {
        (async () =>{
            try{
                const response = await getStarsList();
                setStarsData(response);
            } catch (error) {
                console.log(error);
            }
        })()
    },[])

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return starsData.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);
    
    return (
        <div>
            <Table props={currentTableData}/>
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

const Table = ({props}) => {
    const elements = props;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Name of Constellation</th>
                </tr>
            </thead>
            <tbody>
                {
                    elements.map((element) => (
                        <tr key={element.key}>
                            <td>{element.name}</td>
                            <td>{element.description}</td>
                            <td>{element.urlImage}</td>
                            <td>{element.constellation}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        )
}

export default ListOfStars;