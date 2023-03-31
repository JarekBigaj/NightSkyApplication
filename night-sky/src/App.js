import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {

  return (
    <div>
      <AppTitle/>
      <AppFunctionBar/>
    </div>
  );
}

const AppTitle = styled(({className}) =>{
  return <h1 className={className}>NightSky</h1>
})`
  color:blue;
`;

const AppFunctionBar = styled(({className}) => {
  return(
    <div>
      <AppFunctionButton buttonName="Add Star" onClick={() => console.log({className})}/>
    </div>
  )
})`

`;

const AppFunctionButton = styled(({className, buttonName, onClick}) =>{
  return <button className={className} onClick={onClick}>{buttonName}</button>
})`

`;

export default App;
