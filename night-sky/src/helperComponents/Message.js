import { useNavigate } from "react-router-dom"

export const MessageAfterSubmit = () =>{
    const navigate = useNavigate();

    const querryString = window.location.search;
    const urlParams = new URLSearchParams(querryString);
    const getId = urlParams.get('id');
    const getOptions = urlParams.get('options');
    const getMsg = urlParams.get('msg');

    const redirect = () => {
        if(getOptions==="addConstellation") return navigate('/')
        if(getOptions==="addStar") return navigate(`/`)
        if(getOptions==="constellation") return navigate(`/constellationInfoCard?id=${getId}`)
        if(getOptions==="delete") return navigate(`/listOfStars`);
        if(getOptions==="deleteConst") return navigate('/listOfConstellations');
        return navigate(`/starInfoCard?id=${getId}`);
    }
    return (
        <div className="message-wrapper">
            <div className="msg-wrapper">
                {getMsg === "Failed" ? (
                    <span className="neon-msg failed">Failed</span>
                ) : (
                    <span className="neon-msg success">Success !</span>
                )
                }
                
            </div>
            <div className="button-wrapper-for-one-button">
                <button className="button-neon-styled" onClick={redirect}>Return</button>
            </div>
        </div>
    )
}