import { useNavigate } from "react-router-dom"

export const MessageAfterSubmit = () =>{
    const navigate = useNavigate();

    const querryString = window.location.search;
    const urlParams = new URLSearchParams(querryString);
    const getId = urlParams.get('id');
    const getOptions = urlParams.get('options');

    const redirect = () => {
        if(getOptions==="addStar") return navigate(`/`)
        if(getOptions==="constellation") return navigate(`/constellationInfoCard?id=${getId}`)
        if(getOptions==="delete") return navigate(`/listOfStars`);
        return navigate(`/starInfoCard?id=${getId}`);
    }
    return (
        <div>
            <span>Success</span>
            <button onClick={redirect}>Return</button>
        </div>
    )
}