import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

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
                cloudinessLevel: 5,
                isPrecipitation: false,
                typeOfPrecipitaion: ``,
                lunarPhase: '',
                fogDensityLevel: 5
            }
    });

    const handleCloudinessChange = (event) => {
        setNightSkyWeather(prevState => ({
            ...prevState,
            cloudinessLevel: Number(event.target.value)
          }));
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
            fogDensityLevel: Number(event.target.value)
        });
    };

    const handlePrecipitationChange = (event) => {
        setNightSkyWeather(prevState => ({
            ...prevState,
            isPrecipitation: event.target.checked
        }))
    };
    
    const handlePrecipitationTypeChange = (event) => {
        setNightSkyWeather({
            ...nightSkyWeather,
            typeOfPrecipitaion: event.target.value
        });
    };

    useEffect(()=>{
        if(nightSkyWeather.cloudinessLevel===0){
            setNightSkyWeather(prevState => ({
                ...prevState,
                isPrecipitation: false,
                typeOfPrecipitaion:``
            }));
        }
        
    },[nightSkyWeather.cloudinessLevel])

    console.log(nightSkyWeather)
    const {cloudinessLevel,isPrecipitation,typeOfPrecipitaion,lunarPhase,fogDensityLevel} = nightSkyWeather;
    return (
        <AppContainer>
            <SliderWrapper name="cloudinessLevel">
                <Label value="Cloudiness Level : "/>
                <Slider type="range" min="0" max="10" value={cloudinessLevel} onChange={handleCloudinessChange} />
                <Label value={cloudinessLevel}/>
            </SliderWrapper>
            <CheckBoxWrapper>
                <Label value="Precipitation : "/>
                <Input type="checkbox" 
                    checked={isPrecipitation} 
                    value={isPrecipitation}
                    onChange={handlePrecipitationChange} 
                    disabled={cloudinessLevel === 0}/>
            </CheckBoxWrapper>
            <CheckBoxWrapper className="radio-box">
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
            <CheckBoxWrapper className="radio-box">
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
                <Slider type="range" min="0" max="10" value={fogDensityLevel} onChange={handleFogChange} />
                <Label value={fogDensityLevel}/>
            </SliderWrapper>
            
        </AppContainer>
        )
}

const AppContainer = styled(({className,children}) =>{
    return <div className={className}>{children}</div>
})`
  
`;

const Label = styled(({className,value}) => {
    return <label className={className}>{value}</label>
})`

--grey-light: #f5f5f5;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  &.has-text-grey-light {
    color: var(--grey-light);
  }
`;

const CheckBoxWrapper = styled (({className,children})=>{
    return <div className={className}>{children}</div>
})`

`;

const SliderWrapper = styled(({className,name,children})=>{
    return <div name={name} className={className}>{children}</div>
})`

`;

const Input = styled(({className,checked,type,value,onChange,name,disabled})=>{
    return <input className={className} checked={checked} name={name} type={type} value={value} onChange={onChange} disabled={disabled}/>
})`

`;

const Slider = styled(({className,type,min,max,value,onChange})=>{
    return <input className={className} type={type} onChange={onChange} min={min} max={max} value={value}/>
})`
--purple: #4a4e69;
--navy: #1f2233;
--blue: #0077c2;
--light-blue: #00d1b2;
--grey-light: #f5f5f5;
--grey-medium: #e3e3e3;
--grey-dark: #333333;

  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  margin-top: 0.5rem;
  background: linear-gradient(to right, var(--light-blue) 0%, var(--blue) 100%);
  border-radius: 5px;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--navy);
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--navy);
    cursor: pointer;
  }
}
`;

export default NightSkyWeather;