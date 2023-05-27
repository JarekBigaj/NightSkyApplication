import { useEffect, useState } from "react";
import { listOfConstellation } from "../../helperFunctions/listOfConstellation";
import { useNavigate } from "react-router-dom";
import { deleteElement } from "./deleteElement";
import styled from "styled-components";



const CustomInfoCard = ({starProps,constellationProps}) =>{
    const [isEdit,setIsEdit] = useState(false);
    const navigate = useNavigate();
    const handleChangeIsEdit = () => setIsEdit(!isEdit);
    const handleDataDelete = () =>{
         deleteElement(starProps,'http://127.0.0.1:3600/api/stars/EditSelectedStar');
         navigate(`/message?options=delete`)
    };
    const selectedProps = {
        id: starProps.id,
        Name: starProps.Name,
        Description: starProps.Description,
        "Url image": starProps["Url image"],
        constellationId: starProps.constellationId
    }
    return (
        <div>
            {!isEdit?(
                <div >
                    <CustomInfoField isEdit={isEdit} props={selectedProps} conditions={["id","constellationId"]}/>
                    <CustomInfoField props={constellationProps} conditions={["id"]}/>
                </div>
            ) : (
                <div>
                    <EditForm props={selectedProps}/>
                </div>
            )}
        {!isEdit&&
        <div >
            <button  onClick={handleChangeIsEdit}>Edit</button>
            <button  onClick={handleDataDelete}>Delete</button>
        </div>
        }
        
        </div>
    )
}


export const CustomInfoField = styled(({props,conditions}) =>{
    const [id,constellationId] = conditions;
    
    return (
        <div>
            {
                Object.entries(props).map(([key,value])=>{
                    if(key === id || key===constellationId) return 
                    return (
                        <div key={`${key}:${value}`}>
                            <label key={key}>{key} : </label>
                            <label key={value}>{value}</label>
                        </div>
                    )
                })
            
            }
        </div>
    )
})`

`

const EditForm = ({props}) =>{
    const [constellationsName,setConstellationsName] = useState([]);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: props.id,
        name: props.Name,
        description: props.Description,
        urlImage: props[`Url image`],
        constellationId:props.constellationId
    });

    const editStarData = async (formData) =>{
        const response = await fetch('http://127.0.0.1:3600/api/stars/EditSelectedStar',{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        if(!response.ok) {
            throw new Error(`This is an HTTP error: The status is ${response.status}`)
        };
        const json = response.json();
        return json;
    }
    const handleFormSubmit = e => {
        e.preventDefault();
        (async () =>{
            try{
                const response = await editStarData(formData);
            } catch (error) {
                console.log(error);
            }
        })()
        navigate(`/message?id=${formData.id}`);
      };
  
    const handleInputChange = e => {
      const { name, value } = e.target;
      console.log(value);
      setFormData(prevData => ({
        ...prevData,
        [name]: value,
      }));  
      console.log(value);
    };


  
    useEffect(()=>{
        (async()=>{
            try{
                const response = await listOfConstellation();
                setConstellationsName(response);
            }catch(error) {
                console.log(error)
            }
        })()
    },[])

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                {
                    Object.entries(formData).map(([key,value])=>{
                        return (key!=="id" ? 
                        (
                            <div key={key+"div"}>
                                <label key={key+"label"}>{key + " :"}</label>
                                {key === "constellationId" ?
                                  <select 
                                  key={key+"select"} 
                                  value={value} 
                                  name={key} 
                                  onChange={handleInputChange}>
                                    {constellationsName.map((constellation)=>{
                                      const {id,name} = constellation;
                                      return (
                                        <option key={id+name} value={id}  >
                                          {name}
                                        </option>
                                      )
                                    })}
                                  </select>
                                :
                                  <input 
                                  key={key+"input"} 
                                  type="text" 
                                  name={key} 
                                  placeholder={value} 
                                  value={value} 
                                  onChange={handleInputChange} />
                                }
                            </div>
                            ) : (
                                <></>
                            )
                        )
                    })
                }
              <button type="submit">Submit</button>
            </form>
        </div>
    )
}



export default CustomInfoCard;