import React, { useState } from 'react';
import Minus from '../images/icon-minus.svg';
import Plus from '../images/icon-plus.svg';
import Cart from '../images/icon-cart.svg';


const Cards = () => {

  const [ quantity, setQuantity ] = useState(0);

const handleIncrease = () => {
  setQuantity(quantity + 1)
}

const handleDecrease = () => {
  if((quantity -  1 ) >= 0){
    setQuantity(quantity - 1 );
    console.log('decreased');
  }

}

  return (
   <section>
    <div className='w-96  mx-32'>
    <div className=''>
      <h6 className='text-orange-500 '>SNEAKER COMPANY</h6>
      <h1 className='text-3xl my-4 font-bold'>
        Fall Limited Edition
        <br/> Sneakers
      </h1>
      <p className='flex items-center mt-8'>These low-profile sneakers are your perfect casual wear companion. 
        Featuring a durable rubber outer sole, 
        they'll withstand everything the weather can offer.</p>
        <div className='flex items-center space-x-3 mt-8'>
          <h1 className='font-bold text-3xl  '>
            $125.00
          </h1>
          <span className='bg-orange-100 text-orange-400 font-bold rounded-lg flex items-center px-2'>50%</span>
        </div>
        <del>
          $250.00
        </del>
    </div>
    <div className='flex items-center space-x-16 mt-8'>
<div className='flex items-center space-x-3 bg-orange-100 py-3 px-9 rounded-lg'>
      <a href='/' onClick={handleDecrease}>
        <img src={Minus}
        width={10}
        height={10}
        alt="Minus" />
      </a>
      <input
              type='number'
              placeholder={0}
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className='text-center w-12 outline-none bg-orange-100'
            />
      <a href='/' onClick={handleIncrease}>
        <img src={Plus} 
        width={10}
        height={10}
        
        alt="Plus" />
      </a>
    </div>
    <button className='flex items-center space-x-3 bg-orange-400 w-40 h-12 rounded-lg'>
      <a href='/'>
        <img src={Cart}
        width={20}
        height={10}
        alt='Cart'
        className='ml-3 filter invert-100'/>
      </a>
      <span className='text-white flex items-center justify-center'>Add to cart</span>
      </button>
    </div>
    </div>
   </section>
  )
}

export default Cards
