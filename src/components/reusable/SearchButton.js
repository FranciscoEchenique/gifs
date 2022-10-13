import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import './SearchButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";

export default function SearchButton (){

    const navigate = useNavigate();

    const searchGifInput = useRef();

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (searchGifInput.current.value === ''){
            setError(true);
            setTimeout(() => setError(false), 5000)
            return;
        }

        navigate(`/gifs/${searchGifInput.current.value}`)
    }

    return (
    <div className='input-container'>
        <form onSubmit={handleSubmit}>
            <input ref={searchGifInput} type='text' className='input-gif' placeholder='Search gifs'/>
            <button>Search</button>
            {
                error && <p className='error-message' >You have to search some gif  <FontAwesomeIcon icon={faWarning} /></p>
            }
        </form>
    </div>
    )
}