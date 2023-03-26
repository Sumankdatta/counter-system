import React, { useState } from 'react';
import './Counter.css'
import img2 from '../../assets/img2.jpg'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {

    const [count, setCount] = useState(false)

    return (
        <div style={{
            background: (`url(${img2})`),
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'cover',
            height: '100vh',
            position: 'relative',
            
        }}>

            <div className='count-container'>

                <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                    <div className='counter'>
                        <div className='font-size'>
                            
                            {
                                count ? <CountUp start={0} end={100} delay={0} duration={5} /> : ''
                            }
                            <p className='icon'>Awards & Citation</p>
                        </div>
                        <div>
                            {
                                count ? <CountUp start={0} end={900} delay={0} duration={5} /> : ''
                            }
                            <p className='icon'>Cases Won</p>
                        </div>
                        <div>
                           <div className='plus'>
                           {
                                count ? <CountUp start={0} end={2500} delay={0} duration={5} /> : ''
                            }
                            <h3>+</h3>
                           </div>
                            <p className='icon'>Clients</p>
                        </div>
                    </div>
                </ScrollTrigger>


            </div>

        </div>
    );
};

export default Counter;