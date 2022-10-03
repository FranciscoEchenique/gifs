import React from "react";
import { Link } from 'react-router-dom';
import './gif.css';

function Gif ({title, url, id}) {
    return (
    <div className="gif">
        <h4>{title}</h4>
        <Link to={`/gif/${id}`}><img src={url} alt={title}/></Link>
    </div>
    )
}

export default Gif;