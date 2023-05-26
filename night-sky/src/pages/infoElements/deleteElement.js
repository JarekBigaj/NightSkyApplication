

export const deleteElement = (props) => {
    const elementData = {
        id: props.id,
        name: props.Name,
        description: props.Description,
        urlImage: props[`Url image`],
        constellationId:props.constellationId,
        isDead:true
    };

    console.log(elementData)

    const deleteData = async (data) =>{
        const response = await fetch('http://127.0.0.1:3600/api/stars/EditSelectedStar',{
            method:'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        if(!response.ok) {
            throw new Error(`This is an HTTP error: The status is ${response.status}`)
        };
        const json = response.json();
        console.log(json);
        return json;
    }

    (async()=>{
        try{
            const response = await deleteData(elementData);
        }catch(error) {
            console.log(error)
        }
    })()
    
}