

export const deleteElement = (props,api) => {
    const apiFromUrl = api;
    const elementData = {
        id: props.id,
        name: props.Name,
        description: props.Description,
        urlImage: props[`Url image`],
        constellationId:props.constellationId,
        isDead:true
    };

    const deleteData = async (data,apiFromUrl) =>{
        const response = await fetch(apiFromUrl,{
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
        return json;
    }

    (async()=>{
        try{
            const response = await deleteData(elementData,apiFromUrl);
        }catch(error) {
            console.log(error)
        }
    })()
    
}