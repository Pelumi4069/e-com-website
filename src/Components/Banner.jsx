import React from 'react';
import BANNER1 from '../assets/ban.jpeg';
import BANNER2 from '../assets/whe.jpeg';


const Banner = () => {
  return (
    <div className="container pt-16">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
            <div className="overflow-hidden rounded-lg">
                <img 
                className='hover:scale-105 transition-transform' 
                src={BANNER1} 
                alt="banner" 
                />
            </div>
            <div className="overflow-hidden rounded-lg">
                <img 
                className='hover:scale-105 transition-transform' 
                src={BANNER2} 
                alt="banner" 
                />
            </div>
        </div>
    </div>
  )
}

export default Banner;