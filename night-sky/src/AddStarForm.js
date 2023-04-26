import styled from "styled-components";
import { useState,useEffect } from "react";

const LUNAR_PHASES = [
    { id: 'full', name: 'Full Moon' },
    { id: 'new', name: 'New Moon' },
    { id: 'first-quarter', name: 'First Quarter' },
    { id: 'third-quarter', name: 'Third Quarter' }
];

function AddStarForm(){
    const [nightSkyWeather,  setNightSkyWeather] = useState(() =>{
        return {
                cloudinessLevel: '5',
                lunarPhase: '',
                fogDensityLevel: '5'
            }
    });

    const handleCloudinessChange = (event) => {
        setNightSkyWeather({
            ...nightSkyWeather,
            cloudinessLevel: event.target.value
          });
    }

    const handlePhaseChange = (event) => {
        setNightSkyWeather({
            ...nightSkyWeather,
            lunarPhase: event.target.value
        });
    };

    const handleFogChange = (event) => {
        setNightSkyWeather({
            ...nightSkyWeather,
            fogDensityLevel: event.target.value
        });
    };

    console.log(nightSkyWeather);

    return (
        <div>
            <SliderWrapper name="cloudinessLevel">
                <Label value="Cloudiness Level : "/>
                <Slider type="range" min="1" max="10" value={nightSkyWeather.cloudinessLevel} onChange={handleCloudinessChange} />
                <Label value={nightSkyWeather.cloudinessLevel}/>
            </SliderWrapper>
            <CheckBoxWrapper>
                {LUNAR_PHASES.map((phase) => (
                    <label key={phase.id}>
                    <Input
                        type="radio"
                        name="lunar-phase"
                        value={phase.id}
                        checked={nightSkyWeather.lunarPhase === phase.id}
                        onChange={handlePhaseChange}
                    />
                    {phase.name}
                    </label>
                ))}
            </CheckBoxWrapper>
            <SliderWrapper name="fogDensityLevel">
                <Label value="Fog Density Level : "/>
                <Slider type="range" min="1" max="10" value={nightSkyWeather.fogDensityLevel} onChange={handleFogChange} />
                <Label value={nightSkyWeather.fogDensityLevel}/>
            </SliderWrapper>
            
        </div>
        )
}

const Label = styled(({className,value}) => {
    return <label className={className}>{value}</label>
})`

`;

const CheckBoxWrapper = styled (({className,children})=>{
    return <div className={className}>{children}</div>
})`

`;

const SliderWrapper = styled(({className,name,children})=>{
    return <div name={name} className={className}>{children}</div>
})`

`;

const Input = styled(({className,type,value,onChange,name})=>{
    return <input className={className} name={name} type={type} value={value} onChange={onChange}/>
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