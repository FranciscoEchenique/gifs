import { Link,  useNavigate } from 'react-router-dom'; 
import { useRef } from 'react'
import './Home.css';
import { useGifs } from '../hooks/useGifs';
import Gif from './Gif';

export default function Home () {

    const keyword = localStorage.getItem('lastWord');
    const navigate = useNavigate();

    const gifs = useGifs({word: 'trending'});

    const searchGifInput = useRef();

    const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/gifs/${searchGifInput.current.value}`)
  }

    return (
        <div className='main-container'>
            <div className='logo-container'>
                <h1>SearchYourGif</h1>
            </div>

            <div className='input-container'>
                <form onSubmit={handleSubmit}>
                    <input ref={searchGifInput} type='text' className='input-gif' placeholder='Search gifs'/>
                    <button>Buscar</button>
                </form>
            </div>

            <ul>
                <li>
                    <Link to='gifs/soccer' >Football gifs</Link>
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

            <div className='galery-container'>
                {
                    gifs.map(({title, id, url}) => {
                      return <div className='gif-container'>
                            <Gif 
                                key={id}
                                title={title}
                                id={id}
                                url={url}
                            />
                        </div>
                    })
                }
            </div>

        </div>
    )
}