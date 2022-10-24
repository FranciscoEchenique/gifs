import Gif from "../Gif";
import './GifGallery.css'

export default function GifGallery ({ gifs }){
    return (
        <div className='galery-container'>
            {
                gifs.map(({title, id, url}) => {
                    return <div className='gif-container' key={id}>
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
    );
}