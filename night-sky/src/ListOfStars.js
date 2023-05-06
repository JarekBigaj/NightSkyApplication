import { useState,useMemo } from "react";
import Pagination from "./Pagination";


const dummyObject = {
    key: "",
    name: "Gwiazda",
    description: "Gwiazda to taka gwiazda że hej",
    urlImage: "Tu bedzie link do zdjecia",
    constellation:"Nazwa konstelacji"
}
const dummyObjectsList = [];

const PageSize = 10;

for(let i=0; i<100;i++){
    const obj = {
        ...dummyObject,
        key:i,
        name: dummyObject.name + i + " "
    }
    dummyObjectsList.push(obj);
}
console.log({dummyObjectsList})

function ListOfStars(){
    const [currentPage, setCurrentPage] = useState(1);
    
    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return dummyObjectsList.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);
    
    return (
        <div>
            <Table props={currentTableData}/>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={dummyObjectsList.length}
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