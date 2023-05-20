

const CustomInfoCard = ({props}) =>{

    return (
        <div>
            {
            Object.entries(props).map(([key,value])=>{
                console.log({key})
                if(key === "id") return
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