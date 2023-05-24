import { useEffect, useState } from "react";
import { listOfConstellation } from "../../helperFunctions/listOfConstellation";



const CustomInfoCard = ({starProps,constellationProps}) =>{
    const [isEdit,setIsEdit] = useState(false);
    const handleChangeIsEdit = () => setIsEdit(!isEdit);
    
    return (
        <div>
            {!isEdit?(
                <div>
                    <CustomInfoField isEdit={isEdit} props={starProps} conditions={["id","constellationId"]}/>
                    <CustomInfoField props={constellationProps} conditions={["id"]}/>
                </div>
            ) : (
                <div>
                    <EditForm props={starProps}/>
                </div>
            )}
            
        <button onClick={handleChangeIsEdit}>Edit</button>
        <button>delete</button>
        </div>
    )
}

const CustomInfoField = ({props,conditions}) =>{
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
}

const EditForm = ({props}) =>{
    const [constellationsName,setConstellationsName] = useState([]);
    const [formData, setFormData] = useState({
        id: props.id,
        name: props.Name,
        description: props.Description,
        urlImage: props[`Url image`],
        constellationId:props.constellationId
    });
    console.log(props);
    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(formData)
        fetch('http://127.0.0.1:3600/api/stars/addStar',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        
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
                console.log({response})
                setConstellationsName(response);
            }catch(error) {
                console.log(error)
            }
        })()
    },[])
  console.log({constellationsName})

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                {
                    Object.entries(formData).map(([key,value])=>{
                        return (
                            key!=="id" ? (
                            <div key={key+"div"}>
                                <label key={key+"label"}>{key + " :"}</label>
                                {key === "constellationId" ?
                                  <select defaultValue={value} name={key} onChange={handleInputChange}>
                                    {constellationsName.map((constellation)=>{
                                      const {id,name} = constellation;
                                      return (
                                        <option selected={name==="Orion"?"selected":""} key={id} value={id}  >
                                          {name}
                                        </option>
                                      )
                                    })}
                                  </select>
                                :
                                  <input key={key} type="text" name={key} placeholder={value} value={value} onChange={handleInputChange} />
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