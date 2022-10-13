import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './BackButton.css';

export default function BackButton (){

    const navigate = useNavigate();

    const handleClick = e => {
        navigate(-1 , {replace: true})
      }
;
    return <div onClick={handleClick} className='back-button' style={{color: 'white', margin: '10px 0 0 10px'}}>Go back <FontAwesomeIcon icon={faArrowLeft} /></div>
}