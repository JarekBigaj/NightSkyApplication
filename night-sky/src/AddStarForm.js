import styled from "styled-components";
import { useState,useEffect } from "react";

function AddStarForm(){
    const [range,  setRange] = useState(5);

    const handleCloudinessChange = (event) => {
        setRange(event.target.value);
    }

    return (
        <div>
            <Label value="Zachmurzenie"/>
            <SliderWrapper name="cloudinessLevel">
                <Slider type="range" min="1" max="10" value={range} onChange={handleCloudinessChange} />
                <Label value={range}/>
            </SliderWrapper>
        </div>
        )
}

const Label = styled(({className,value}) => {
    return <label className={className}>{value}</label>
})`

`;

const SliderWrapper = styled(({className,name,children})=>{
    return <div name={name} className={className}>{children}</div>
})`

`;

const Slider = styled(({className,type,min,max,value,onChange})=>{
    return <input className={className} type={type} onChange={onChange} min={min} max={max} value={value}/>
})`

`;

const ListWraper = styled(({className,children}) => {
    return <div className={className}>{children}</div>
})`

`;

const List = styled(({className,children,name})=>{
    return <ul name={name} className={className}>{children}</ul>
})`

`;

const ListItem = styled(({className,value})=>{
    return <li className={className}>{value}</li>
})`

`;

export default AddStarForm;