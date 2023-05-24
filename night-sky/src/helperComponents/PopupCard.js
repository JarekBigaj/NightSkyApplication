import { useState } from "react";
import styled from "styled-components";
import { API_GET_CONSTELLATION_LIST } from "../server";

const PopupCard = styled((
  {className,
  handleInputChange,
  handleFormSubmit,
  formData,
  buttonName,
  listOfConstellationsName,
  isSubmitted,
  handleIsSubmited})=> {

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
        handleIsSubmited();
    };


    return (
        <div className={className}>
            <button className="show-form" onClick={togglePopup}>{buttonName}</button>
            {isOpen && (
              <div className="popup-card">
                {isSubmitted ? (
                  <div>
                    <h3>Form submitted successfully!</h3>
                    <button onClick={togglePopup}>Reset</button>
                  </div>
                ) : (
                <div className="popup-content">
                  <button className="exit" onClick={togglePopup}>X</button>
                  <form onSubmit={handleFormSubmit}>
                      {
                          Object.entries(formData).map(([key,value])=>{
                              return (
                                  <div key={key+"div"}>
                                      <label key={key+"label"}>{key + " :"}</label>
                                      {key === "constellationId" ?
                                        <select value={value} name={key} onChange={handleInputChange}>
                                          {listOfConstellationsName.map((constellation)=>{
                                            const {id,name} = constellation;
                                            return (
                                              <option selected={name==="Orion"?"selected":""} key={id} value={id}  >
                                                {name}
                                              </option>
                                              
                                            )
                                          })}
                                        </select>
                                      :
                                        <input key={key} type="text" name={key} value={value} onChange={handleInputChange} />
                                      }
                                  </div>
                              )
                          })
                      }
                    <button type="submit">Submit</button>
                  </form>
                </div>)}
              </div>
            )}
        </div>
    )
})`
position: relative;
  
.popup-card {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background overlay */
  z-index: 9999;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;
}

`;




export default PopupCard;
