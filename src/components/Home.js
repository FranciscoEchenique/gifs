import { Link, Navigate } from 'react-router-dom'; 
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home () {

    const keyword = localStorage.getItem('lastWord');
    const navigate = useNavigate();

    const searchGifInput = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/gifs/${searchGifInput.current.value}`)
  }

    return (
        <div>
            <img src={'#'}  alt='Logo'/>

            <div className='contenedor-input'>
                <form onSubmit={handleSubmit}>
                    <input ref={searchGifInput} type='text' className='input-gif' placeholder='Search gifs'/>
                    <button>Buscar</button>
                </form>
            </div>

            <ul>
                <li>
                    <Link to='gifs/football' >Football gifs</Link>
                </li>

                <li>
                    <Link to='gifs/trending' >Trending gifs</Link>
                </li>

                <li>
                    <Link to='gifs/heros' >Hero gifs</Link>
                </li>
                {
                    keyword && 
                    <li>
                        <Link to={`gifs/${keyword}`} >Last visited gifs</Link>
                    </li>
                }
            </ul>
        </div>
    )
}