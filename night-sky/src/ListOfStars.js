import { useState } from "react";

const dummyObject = {
    key: "",
    name: "Gwiazda",
    description: "Gwiazda to taka gwiazda że hej",
    urlImage: "Tu bedzie link do zdjecia",
    constellation:"Nazwa konstelacji"
}
const dummyObjectsList = [];

for(let i=0; i<100;i++){
    const obj = {
        ...dummyObject,
        key:i
    }
    dummyObjectsList.push(obj);
}
console.log({dummyObjectsList})

function ListOfStars(){
    const [currentPage, setCurrentPage] = useState(1);
    
    return (
        <div>
            <Table props={dummyObjectsList}/>
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