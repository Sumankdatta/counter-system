import React from 'react';
import './Cards.css'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img10 from '../../assets/img10.jpg'
import Card from '../Card/Card';

const Cards = () => {
    const cards=[
        {id:1,img:img4,title:'What is a Business Title? A business title is a job title in a corporation or organization.'},
        {id:2,img:img5,title:'What is a Business Title? A business title is a job title in a corporation or organization.'},
        {id:3,img:img6,title:'What is a Business Title? A business title is a job title in a corporation or organization.'},
        {id:4,img:img7,title:'What is a Business Title? A business title is a job title in a corporation or organization.'},
        {id:5,img:img8,title:'What is a Business Title? A business title is a job title in a corporation or organization.'},
        {id:6,img:img10,title:'What is a Business Title? A business title is a job title in a corporation or organization.'},
       
    ]
    return (
        <div >
            <h1 className='cards-title'>Our Business Facility</h1>
         <div className='cards'>
         {
            cards.map(card=><Card
            key={card.id}
            card={card}
            ></Card>)
          }
         </div>
        </div>
    );
};

export default Cards;