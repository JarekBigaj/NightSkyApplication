import { useState } from "react";
import styled from "styled-components";

const PopupCard = styled((
  {className,
  handleInputChange,
  handleFormSubmit,
  formData,
  buttonName,
  listOfConstellationsName})=> {

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className={className}>
            <button className="button-neon-styled" onClick={togglePopup}>{buttonName}</button>
            {isOpen && (
              <div className="popup-card">
                <div className="popup-content">
                  <button className="exit" onClick={togglePopup}>X</button>
                  <form onSubmit={handleFormSubmit}>
                      {
                          Object.entries(formData).map(([key,value])=>{
                              return (
                                  <div key={key+"div"} className="row-wrapper">
                                      <label key={key+"label"}>{key + " :"}</label>
                                      {key === "constellationId" ?
                                        <select value={value} name={key} onChange={handleInputChange}>
                                          {listOfConstellationsName.map((constellation)=>{
                                            const {id,name} = constellation;
                                            return (
                                              <option selected={name==="PolonExtra"?"selected":""} key={id} value={id}  >
                                                {name}
                                              </option>
                                              
                                            )
                                          })}
                                        </select>
                                      :
                                        <input
                                         key={key} 
                                         type="text" 
                                         name={key} 
                                         value={value} 
                                         onChange={handleInputChange} />
                                      }
                                  </div>
                              )
                          })
                      }
                    <div className="button-wrapper-small">
                      <button class="button-neon-styled-small" type="submit">Submit</button>
                    </div>
                  </form>
                </div>
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.popup-content {
  width: min(350px, 100% - 3rem);
  margin-inline: auto;
  color:white;
  font-size:1.2em;
  position:relative;
  background-color: black;
  height: min(300px, 100% - 3rem);
  padding: 80px 30px 0px 30px;
  border: 1px solid inherit;
  border-radius:0.75em;
}

.button-wrapper-small{
  position:absolute;
  display:flex;
  bottom:2.5em;
  left:0;
  right:0;
  justify-content: center; 
}

.button-neon-styled-small{
  font-size:1.4em;

  background-color: var(--clr-bg);
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: var(--clr-neon);
  border: var(--clr-neon) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 
    0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em currentColor;

  box-shadow: 
    inset 0 0 0.5em 0 var(--clr-neon),
    0 0 0.5em 0 var(--clr-neon) ;

  transition: background-color 100ms linear;
}

.button-neon-styled-small::before {
  pointer-events:none;
  content: "";
  position:absolute;
  background: var(--clr-neon);
  
  top:120%;
  left:0;
  width:100%;
  height:100%;

  transform: 
    perspective(4em) 
    rotateX(20deg)
    scale(0.8, 0.26);

  filter: blur(1em);
  opacity: 0.7;
}

.button-neon-styled-small:after{
  content:"";
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;

  opacity:0;
  transition: opacity 100ms linear;
}

.button-neon-styled-small:hover,
.button-neon-styled-small:focus{
  background: var(--clr-neon);
  color: white;
  text-shadow: none;
}

.button-neon-styled-small:hover::before,
.button-neon-styled-small:focus::before{
  opacity:1;
}
.button-neon-styled-small:hover::after,
.button-neon-styled-small:focus::after{
  opacity:1;
}

.row-wrapper{
  display:grid;
  grid-template-columns: 15ch auto;
  gap:0.5rem;
  padding: 0.5rem 1rem;
}

form {
  
}

input{
  background-color:inherit;
  border:gray solid 2px;
  border-radius:5px;
}

.exit {
  position: absolute;
  top:0.5em;
  right:0.5em;
  font-size:2em;
  background-color:inherit;
  color:white;
  border:none;
  cursor:pointer;
  color: var(--clr-neon);
  text-shadow: 
    0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em currentColor;
  transition: background-color 100ms linear;
}

.exit::before {
  pointer-events:none;
  content: "";
  position:absolute;
  background: var(--clr-neon);
  
  top:30%;
  left:0;
  width:100%;
  height:100%;

  transform: 
    perspective(2em) 
    rotateX(20deg)
    scale(0.8, 0.26);

  filter: blur(1em);
  opacity: 0.7;
}

.button-neon-styled-small:after{
  content:"";
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;

  opacity:0;
  transition: opacity 100ms linear;
}

.exit:hover,
.exit:focus{
  color: var(--clr-neon);
  text-shadow: none;
}

.exit:hover::before,
.exit:focus::before{
  opacity:1;
}
.exit:hover::after,
.exit:focus::after{
  opacity:1;
}
`;




export default PopupCard;
