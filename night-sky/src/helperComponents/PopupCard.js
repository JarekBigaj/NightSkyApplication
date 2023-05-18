import { useState } from "react";
import styled from "styled-components";

const PopupCard = styled(({className,handleInputChange,handleFormSubmit,formData,buttonName})=> {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className={className}>
            <button onClick={togglePopup}>{buttonName}</button>
            {isOpen && (
              <div className="popup-card">
                <form onSubmit={handleFormSubmit}>
                    {
                        Object.entries(formData).map(([key,value])=>{
                            return (
                                <div key={key+"div"}>
                                    <label key={key+"label"}>{key + " :"}</label>
                                    <input key={key} type="text" name={key} value={value} onChange={handleInputChange} />
                                </div>
                            )
                        })
                    }
                  <button type="submit">Submit</button>
                </form>
              </div>
            )}
        </div>
    )
})`
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 400px;
padding: 20px;
background-color: #ffffff;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
z-index: 9999;

form {
  display: grid;
  grid-gap: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 5px;
}

button {
}
`;




export default PopupCard;
