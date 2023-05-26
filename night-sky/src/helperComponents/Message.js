import { useNavigate } from "react-router-dom"

export const MessageAfterSubmit = () =>{
    const navigate = useNavigate();

    const querryString = window.location.search;
    const urlParams = new URLSearchParams(querryString);
    const getStarId = urlParams.get('id');
    const getOptions = urlParams.get('options');

    const redirect = () => {
        if(getOptions==="delete") return navigate(`/listOfStars`);
        return navigate(`/starInfoCard?id=${getStarId}`);
    }
    return (
        <div>
            <span>Success</span>
            <button onClick={redirect}>Return</button>
        </div>
    )
}