import React, { useRef } from "react";
import { useGifs } from '../hooks/useGifs';
import { useParams, useNavigate } from "react-router-dom";
import Gif from "./Gif";
import './ListOfGifs.css'

function Home() {
    
    const navigate = useNavigate();

    const { topic } = useParams();

    const gifs = useGifs({word: topic});

    const searchGifInput = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/gifs/${searchGifInput.current.value}`)
  }

  return (
    <div className='contenedor'>
        <div className='contenedor-input'>
                <form onSubmit={handleSubmit}>
                    <input ref={searchGifInput} type='text' className='input-gif' placeholder='Search gifs'/>
                    <button>Buscar</button>
                </form>
        </div>

        <div className='contenedor-seccion-gif'>
            {
                gifs.map(({title, id, url}) =>{
                   return <Gif 
                        key={id} 
                        title={title}
                        id={id}
                        url={url}
                    />
                })
            }
        </div>
    </div>
  );
}

export default Home;