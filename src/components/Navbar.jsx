import React from 'react';
import Profile from '../images/image-avatar.png';
import mySVG  from '../images/icon-cart.svg'


const Navbar = () => {
  return (
   <section >
    
    <div className='flex p-6 items-center justify-between'>
    <div className='flex items-center mx-14 pl-8'>
    <a href='#' className='text-4xl font-bold mr-12'>
    sneakers
    </a>
    <span className='mr-4 hover:border-b-orange-900 hover:border-b-2 '>
        <button href='#'>Collections</button>
    </span>
    <span className='mr-4 hover:border-b-orange-900 hover:border-b-2 '>
        <button href='#'>Men</button>
    </span>
    <span className='mr-4 hover:border-b-orange-900 hover:border-b-2 '>
        <button href='#'>Women</button>
    </span>
    <span className='mr-4 hover:border-b-orange-900 hover:border-b-2 '>
        <button href='#' className=' hover:border-b-orange-900 hover:border-b-2 '>About</button>
    </span>
    <span>
        <button href='#' className=' hover:border-b-orange-900 hover:border-b-2 '>Contact</button>
    </span>
</div>
   <div className='flex space-x-6 mr-40  '>
    <a href='/'>
    <img src={mySVG} title='cart' height={40} width={40}/></a>
    <a href='/' className='hover:rounded-full hover:border-2 hover:border-orange-700'>
    <img src={Profile} title='Profile-img' width={40} height={40}/></a>
   </div>
    </div>
    <div className='border-b-2 ml-28 mr-40'></div>
   </section>
  )
}

export default Navbar;
