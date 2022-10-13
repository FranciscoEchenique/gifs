import './Home.css';
import { useGifs } from '../hooks/useGifs';
import Title from './reusable/Title';
import GifGallery from './reusable/GifGallery';
import SearchButton from './reusable/SearchButton';
import HomeLinks from './reusable/HomeLinks';

export default function Home () {

    const keyword = localStorage.getItem('lastWord');

    const gifs = useGifs({word: keyword});

    return (
        <div className='main-container'>
            <Title title='SearchYourGif' />
            
            <SearchButton />

            <HomeLinks />

            <Title title='Last visited gifs ' />

            <GifGallery gifs={gifs}/>

        </div>
    )
}