import React from 'react';
import './Card.css'

const Card = ({ image, title, about, time, needTime }) => {
    const new_about = about.slice(0, 50) + '...';
    return (
        <div className='card-style'>
            <img src={image} alt="img" />
            <h3>{title}</h3>
            <p><title>{about}</title>{new_about}</p>
            <p>Time required : <strong>{time}</strong> min</p>
            <button onClick={() => needTime(time)}>Add to list</button>
        </div>
    );
};

export default Card;