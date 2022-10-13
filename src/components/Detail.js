import { useParams } from "react-router-dom";
import { useGifs } from "../hooks/useGifs";
import { useEffect, useState } from "react";
import Gif from "./Gif";
import BackButton from "./reusable/BackButton";
import './Detail.css';

export default function (){

    const { gifId } = useParams();
    const [singleGif, setSingleGif] = useState(null);
    
    const localStorageKeyword = localStorage.getItem('lastWord');
    const gifs = useGifs({word: localStorageKeyword});

    useEffect(() => {
        const gif = gifs.find(e => {return e.id === gifId});
        setSingleGif(gif);  
    }, [gifs]);

    return (
    <div className="detail-container">
            <BackButton />

            {
               singleGif &&  
                <h2 className='detail-title'>{singleGif.title}</h2>
            }
                

            {
                singleGif && 
                <Gif 
                    id={singleGif.id}
                    url={singleGif.url}
                    title={singleGif.title}
                />
            }
    </div>
    )
}