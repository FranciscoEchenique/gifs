import { useParams, useNavigate } from "react-router-dom";
import { useGifs } from "../hooks/useGifs";
import { useEffect, useState } from "react";
import Gif from "./Gif";

export default function (){

    const { gifId } = useParams();
    const [singleGif, setSingleGif] = useState(null);
    const navigate = useNavigate();

    const localStorageKeyword = localStorage.getItem('lastWord');
    const gifs = useGifs({word: localStorageKeyword});

    useEffect(() => {
        const gif = gifs.find(e => {return e.id === gifId});
        setSingleGif(gif);
    }, [gifs])

    const handleClick = e => {
        navigate('/', { replace: true })
    }
    

    return (
    <div className="contenedor">
        <div className="contenedor-seccion-gif">
            <div onClick={handleClick} >Volver </div>
                {
                    singleGif && 
                    <Gif 
                        id={singleGif.id}
                        url={singleGif.url}
                        title={singleGif.title}
                    />
        }
        </div>
    </div>
    )
}