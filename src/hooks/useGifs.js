import { useEffect, useContext } from "react";
import apiCall from '../services/apiCall';
import GifContext from "../contexts/GifContext";

export function useGifs ({word} = {word: null}){

    const {gifs, setGifs} = useContext(GifContext);

    const wordToUse = word || localStorage.getItem('lastWord') || 'random'; 

    useEffect(() => {
        apiCall({keyword: wordToUse})
        .then(gifs => setGifs(gifs))
        localStorage.setItem('lastWord', wordToUse);
    }, [word]);

    return gifs;
}