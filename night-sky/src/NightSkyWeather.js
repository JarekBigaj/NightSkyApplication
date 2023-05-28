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

const NightSkyWeather = styled(({className}) => {
    const [nightSkyWeather,  setNightSkyWeather] = useState(() =>{
        return {
                cloudinessLevel: 5,
                isPrecipitation: false,
                typeOfPrecipitaion: ``,
                lunarPhase: '',
                fogDensityLevel: 5
            }
    });

    const [sideBarIsActive,setSideBarIsActive] = useState(false);

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

    const changeStatusSidebar = () =>{
        setSideBarIsActive((prevState)=> !prevState);
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
    const {cloudinessLevel,isPrecipitation,typeOfPrecipitaion,lunarPhase,fogDensityLevel} = nightSkyWeather;
    return (
        <div className={`${className}`}>
            <div className={`sidebar ${sideBarIsActive ? "active" :""}`}>
                <div className="top">
                    <div className="logo">
                       <i className="bx bxl-codepen"></i>
                       <span>Night Sky Weather</span>
                    </div>
                    <i className="bx bx-menu" id="btn" onClick={changeStatusSidebar}></i>
                </div>
                <div className="weather">
                    <SliderWrapper name="cloudinessLevel">
                        <Label value="Cloudiness Level : "/>
                        <Slider type="range" min="0" max="10" value={cloudinessLevel} onChange={handleCloudinessChange} />
                        <Label value={cloudinessLevel}/>
                    </SliderWrapper>
                    <CheckBoxWrapper>
                        <label>Precipitation : </label>
                        <Input type="checkbox" 
                            checked={isPrecipitation} 
                            value={isPrecipitation}
                            onChange={handlePrecipitationChange} 
                            disabled={cloudinessLevel === 0}/>
                    </CheckBoxWrapper>
                    <CheckBoxWrapper className="radio-box">
                        {isPrecipitation &&(
                            PRECIPITATION_TYPES.map((type) => (
                                <label key={type.id} className="input-label">
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
                            <label key={phase.id} className="input-label">
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
                </div>
            </div> 
        </div>
        )
})`
    margin:0;
    background:hsla(0, 0%, 7%, 1) ;
    padding:0;
    color: white;
    box-sizing:border-box;

    .sidebar{
        padding:.4rem 3rem;
        width:250px;
        position: absolute;
        top:4.5rem;
        left:0;
        height:400px;
        transition: all 0.5s ease;
        z-index:999;
    }

    div.active {
        width: 30%;
        background: linear-gradient(to bottom right ,#333,hsla(0, 0%, 7%, 1));
    }

    #btn{
        position: absolute;
        top: .4rem;
        left: .4rem;
        font-size: 2rem;
        line-height: 50px;
        cursor: pointer;
    }

    .top .logo {
        display: flex;
        height: 50px;
        align-items:center;
        width:100%;
        pointer-events:none;
        opacity:0;
    }

    .sidebar.active .top .logo{
        opacity:1;
    }

    .top .logo i{
        font-size: 2rem;
        margin-right: 5px;
    }

    .weather{
        dipslay: flex;
        align-items: center;
        margin: 1rem 0;
        font-size: 1.3rem;
        font-weight:300;
    }

    .weather label{
        color:white;
        opacity:0;
    }

    .weather input{
        opacity:0;
    }

    .sidebar.active .weather input{
        opacity:1;
    }

    .sidebar.active .weather label{
        opacity:1;
    }
    
    .input-label:hover{
        color:blue;
        cursor:pointer;
    }
    
`

const Label = styled(({className,value}) => {
    return <label className={className}>{value}</label>
})`
`;

const CheckBoxWrapper = styled (({className,children})=>{
    return <div className={className}>{children}</div>
})`
    margin:10px 0px;
    display:flex;
`;

const SliderWrapper = styled(({className,name,children})=>{
    return <div name={name} className={className}>{children}</div>
})`

`;

const Input = styled(({className,checked,type,value,onChange,name,disabled})=>{
    return <input className={className} checked={checked} name={name} type={type} value={value} onChange={onChange} disabled={disabled}/>
})`
    cursor: pointer;
    width:2em;
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
  width:50%;
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