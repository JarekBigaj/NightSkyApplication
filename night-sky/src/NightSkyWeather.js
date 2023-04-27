import styled from "styled-components";
import { useState } from "react";

const LUNAR_PHASES = [
    { id: 'full', name: 'Full Moon' },
    { id: 'new', name: 'New Moon' },
    { id: 'first-quarter', name: 'First Quarter' },
    { id: 'third-quarter', name: 'Third Quarter' }
];

const PRECIPITATION_TYPES = [
    {id:`rain`, name: `Rain`},
    {id:`snow`, name:`Snow`},
    {id:`sleet`, name:`Sleet`}
];

function NightSkyWeather(){
    const [nightSkyWeather,  setNightSkyWeather] = useState(() =>{
        return {
                cloudinessLevel: '5',
                isPrecipitation: false,
                typeOfPrecipitaion: ``,
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

    const handlePrecipitationChange = (event) => {
        setNightSkyWeather({
            ...nightSkyWeather,
            isPrecipitation: event.target.checked
        });
    };
    
    const handlePrecipitationTypeChange = (event) => {
        setNightSkyWeather({
            ...nightSkyWeather,
            typeOfPrecipitaion: event.target.value
        });
    };

    console.log({nightSkyWeather});
    const {cloudinessLevel,isPrecipitation,typeOfPrecipitaion,lunarPhase,fogDensityLevel} = nightSkyWeather;
    return (
        <div>
            <SliderWrapper name="cloudinessLevel">
                <Label value="Cloudiness Level : "/>
                <Slider type="range" min="1" max="10" value={cloudinessLevel} onChange={handleCloudinessChange} />
                <Label value={cloudinessLevel}/>
            </SliderWrapper>
            <CheckBoxWrapper>
                <Label value="Precipitation : "/>
                <Input type="checkbox" checked={isPrecipitation} onChange={handlePrecipitationChange}/>
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                {isPrecipitation &&(
                    PRECIPITATION_TYPES.map((type) => (
                        <label key={type.id}>
                            <Input
                                type="radio"
                                name="type-precipitation"
                                value={type.id}
                                checked={typeOfPrecipitaion === type.id}
                                onChange={handlePrecipitationTypeChange}/>
                            {type.name}
                        </label>
                    ))
                )}
            </CheckBoxWrapper>
            <CheckBoxWrapper>
                {LUNAR_PHASES.map((phase) => (
                    <label key={phase.id}>
                    <Input
                        type="radio"
                        name="lunar-phase"
                        value={phase.id}
                        checked={lunarPhase === phase.id}
                        onChange={handlePhaseChange}
                    />
                    {phase.name}
                    </label>
                ))}
            </CheckBoxWrapper>
            <SliderWrapper name="fogDensityLevel">
                <Label value="Fog Density Level : "/>
                <Slider type="range" min="1" max="10" value={fogDensityLevel} onChange={handleFogChange} />
                <Label value={fogDensityLevel}/>
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

export default NightSkyWeather;