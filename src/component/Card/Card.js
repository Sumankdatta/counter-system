import React from 'react';
import './Card.css'

const Card = ({card}) => {
    const {img,title}=card;
    return (
        <div className='card'>
           <img src={img} alt="" />
           <p className='title'>{title}</p>
           <button className='btn-detail'>Details</button>
        </div>
    );
};

export default Card;