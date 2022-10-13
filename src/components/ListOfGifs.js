import React from "react";
import { useGifs } from '../hooks/useGifs';
import { useParams } from "react-router-dom";
import './ListOfGifs.css'
import BackButton from "./reusable/BackButton";
import GifGallery from "./reusable/GifGallery";
import SearchButton from "./reusable/SearchButton";
import Title from "./reusable/Title";

function ListOfGifs() {

    const { topic } = useParams();

    const gifs = useGifs({word: topic});

  return (
    <div className='contenedor'>
        <BackButton />
        <Title title={`${topic} gifs`} />
        <SearchButton />
        <GifGallery gifs={gifs}/>
    </div>
  );
}

export default ListOfGifs;