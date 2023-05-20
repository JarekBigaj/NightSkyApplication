

const CustomInfoCard = ({starProps,constellationProps}) =>{

    return (
        <div>
            <CustomInfoField props={starProps} conditions={["id","constellationId"]}/>
            <CustomInfoField props={constellationProps} conditions={["id"]}/>
        <button>Edit</button>
        </div>
    )
}

const CustomInfoField = ({props,conditions}) =>{
    const [id,constellationId] = conditions;
    return (
        <div>
            {
                Object.entries(props).map(([key,value])=>{
                    if(key === id || key===constellationId ) return 
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

export default CustomInfoCard;