import React from 'react';
import Shoes from '../images/image-product-1.jpg';

const MarketPics = () => {
  return (
    <section>
    <div className='flex items-center mt-20'>
        <a href='/'>
        <img src={Shoes} 
        width={400} 
        height={400}
        className='rounded-xl'
        />
        </a>
    </div>
    </section>
  )
}

export default MarketPics
