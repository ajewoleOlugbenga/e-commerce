import React, { useState } from 'react';
import Shoes from '../images/image-product-1.jpg';
import NiceShoes from '../images/image-product-2.jpg';
import Nikes from '../images/image-product-3.jpg';
import Adidas from '../images/image-product-4.jpg';

const MarketPics = () => {
const [selectShoes, setSelectShoes] = useState(null);

const handleSelectedShoes = (e) => {
setSelectShoes(e);
}

  return (

    <section>
    <div className='flex items-center mt-20'>
        <a href='/'>
        <img src={selectShoes || Shoes } 
        width={400} 
        height={400}
        className='rounded-xl'
        onClick={()=> handleSelectedShoes(Shoes)}
        />
        </a>
    </div>
    </section>
  )
}

export default MarketPics
