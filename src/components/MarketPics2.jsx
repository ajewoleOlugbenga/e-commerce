import React from 'react';
import Shoes from "../images/image-product-1-thumbnail.jpg";
import Product from '../images/image-product-2-thumbnail.jpg';
import Product2 from '../images/image-product-3-thumbnail.jpg';
import Product3 from '../images/image-product-4-thumbnail.jpg';

const MarketPics2 = () => {
  return (
    <section>
        <div className='flex space-x-4 items-center my-4'>
        <a href='/'>
            <img className='rounded-xl hover:opacity-50 hover:border-orange-500 hover:border-4'
             src={Shoes}
             width={87} 
             height={87} 
             alt="Products" />
            </a>
            <a href='/'>
            <img className='rounded-xl hover:opacity-50 hover:border-orange-500 hover:border-4'
             src={Product} 
            width={87} 
            height={87} 
            alt="Products" />
           </a>
           <a href='/'>
            <img className='rounded-xl hover:opacity-50 hover:border-orange-500 hover:border-4'
             src={Product2}
             width={87} 
             height={87} 
             alt="Products" />
            </a>
            <a href='/'>
            <img className='rounded-xl hover:opacity-50 hover:border-orange-500 hover:border-4'
             src={Product3}
             width={87} 
             height={87} 
             alt="Products" />
            </a>
        </div>
    </section>
  )
}

export default MarketPics2
