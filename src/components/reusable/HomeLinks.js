import '../Home.css';
import { Link } from 'react-router-dom'; 

export default function HomeLinks (){

    const keyword = localStorage.getItem('lastWord');

    return (
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
    )
}