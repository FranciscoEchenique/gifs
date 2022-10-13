import './Title.css';

export default function Title ( { title }){

    const upperTitle = title[0].toUpperCase() + title.slice(1);

    return(
        <div className='logo-container'>
            <h1>{upperTitle}</h1>
        </div>
    )
}