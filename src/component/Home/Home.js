import React from 'react';
import './Home.css'
import img3 from '../../assets/img3.jpg'

const Home = () => {
    return (
       <div  >
         <div style={{
            background: `url(${img3})`, 
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: '100vh',
            position: 'relative',
           
        
           
        }} >

            <div className='container'>
                <h1 className='home'>Welcome to our website</h1>
                <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae pariatur porro fuga libero dolorum qui illum consequuntur! Dolorum ad, praesentium tenetur eligendi mollitia, id adipisci modi odio doloremque quia alias tempore provident eos voluptatem animi ducimus iusto. Ipsum in quos vero maxime commodi recusandae facilis, laboriosam ipsam nihil dicta quia magnam ducimus quisquam repellat tenetur. Repudiandae consectetur magnam dolore illum facilis eaque ipsam perferendis nobis accusantium quod i</p>
                <button className='btn'>View Details</button>
            </div>
        </div>
       </div>
    );
};

export default Home;