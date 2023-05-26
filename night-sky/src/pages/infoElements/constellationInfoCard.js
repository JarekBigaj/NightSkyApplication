import { useEffect, useState } from "react";
import { CustomInfoField } from "./CustomInfoCard";
import { useNavigate } from "react-router-dom";
import { deleteElement } from "./deleteElement";
import { getDataConstellation } from "../../helperFunctions/getDataConstellation";

const ConstellationInfoCard = () => {
    const [constellationData,setConstellationData] = useState({});

    const [isEdit,setIsEdit] = useState(false);
    const navigate = useNavigate();
    const handleChangeIsEdit = () => setIsEdit(!isEdit);
    const handleDataDelete = () =>{
         deleteElement(constellationData,'http://127.0.0.1:3600/api/constellations/EditSelectedContellation');
         navigate(`/message?options=delete`)
    };

    const querryString = window.location.search;
    const urlParams = new URLSearchParams(querryString);
    const constellationId = urlParams.get('id');

    useEffect(()=>{
        (async () =>{
            try{
                const response = await getDataConstellation(constellationId);
                setConstellationData(() => {
                    return {
                        id: response.id,
                        Name: response.name,
                        Description: response.description,
                        'Url image': response.urlImage
                    }
                });
            } catch (error) {
                console.log(error);
            }
        })()
    },[])
    return (
        <div>
            {!isEdit?(
                <div>
                    <CustomInfoField props={constellationData} conditions={["id"]}/>
                </div>
            ) : (
                <div>
                    <EditFormConstellation props={constellationData} handleChangeIsEdit={handleChangeIsEdit}/>
                </div>
            )}
            {!isEdit&&
                <div>
                    <button onClick={handleChangeIsEdit}>Edit</button>
                    <button onClick={handleDataDelete}>delete</button>
                </div>
            }
        </div>
        
    )
}


const EditFormConstellation = ({props}) =>{
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: props.id,
        name: props.Name,
        description: props.Description,
        urlImage: props[`Url image`],
    });

    const editData = async (formData) =>{
        const response = await fetch('http://127.0.0.1:3600/api/constellations/EditSelectedContellation',{
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
                const response = await editData(formData);
            } catch (error) {
                console.log(error);
            }
        })()
        navigate(`/message?id=${formData.id}&options=constellation`);
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

    return (
        <div>
                <form onSubmit={handleFormSubmit}>
                {
                    Object.entries(formData).map(([key,value])=>{
                        return (key!=="id" ? 
                        (
                            <div key={key+"div"}>
                                <label key={key+"label"}>{key + " :"}</label>
                                <input 
                                key={key+"input"} 
                                type="text" 
                                name={key} 
                                placeholder={value} 
                                value={value} 
                                onChange={handleInputChange} />
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

export default ConstellationInfoCard;