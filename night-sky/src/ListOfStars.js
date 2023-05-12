import { useState,useMemo, useEffect } from "react";
import Pagination from "./Pagination";
import styled, { ThemeProvider } from "styled-components";

const API_GET_STARS_LIST = `http://127.0.0.1:3600/starsList.json`;

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
      }, [currentPage,starsData]);
    
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Table props={currentTableData}/>
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

const Table = styled(({className,props}) => {
    const elements = props;
    return (
        <TableWrapper>
            <table className={className}>
                <thead>
                    <TableRow>
                        <th>Name</th>
                        <th>Constellation</th>
                    </TableRow>
                </thead>
                <tbody>
                    {
                        elements.map((element) => (
                            <TableRow key={element.id}>
                                <TableCell>{element.name}</TableCell>
                                <TableCell>{element.constellationId}</TableCell>
                            </TableRow>
                        ))
                    }
                </tbody>
            </table>
        </TableWrapper>
        )
})`
  border-collapse: collapse;
  width: 50%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.dark};
  border-radius: 0.25rem;
  overflow: hidden;
  
  th,
  td {
    padding: 0.75rem;
    vertical-align: middle;
    border-top: 1px solid ${props => props.theme.colors.greyLighter};
  }

  thead {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }

  th {
    font-weight: 700;
    text-align: left;
    vertical-align: bottom;
    border-bottom: 2px solid ${props => props.theme.colors.greyLighter};
  }

  tbody tr:nth-of-type(odd) {
    background-color: ${props => props.theme.colors.greyLighter};
  }

  tbody td {
    vertical-align: middle;
    border-bottom: 1px solid ${props => props.theme.colors.greyLighter};
  }
`;


const TableWrapper = styled.div`
  overflow-x: auto;
`;


const TableRow = styled.tr`
  &:hover {
    background-color: ${props => props.theme.colors.grey};
  }
`;

const TableCell = styled.td`
  img {
    max-width: 100%;
    height: auto;
  }
`;

export default ListOfStars;