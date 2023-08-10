import React, { useState } from 'react';
import Profile from '../images/image-avatar.png';
import mySVG  from '../images/icon-cart.svg'
import DropDown from './DropDown';


const Navbar = () => {
const [dropDown, setDropDown] = useState(false);

const toggleDropdown =() => {
  setDropDown(!dropDown)
}

  return (

   <section >
    <div className='max-w-screen-xl mx-auto'>
    <div className='flex p-6 items-center justify-between sm:w-auto sm:h-auto sm:overflow-hidden'>
    <div className='flex items-center mx-14 pl-8'>
    <a href='#' className='text-4xl font-bold mr-12 '>
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
   <div className='flex space-x-6 mr-40 items-center relative'>

    <a href='/'>
    <img src={mySVG} title='cart' height={20} width={20} onClick={toggleDropdown}/></a>
    <span className='hover:rounded-full hover:border-2 hover:border-orange-700'>
    <a href='/'>
    <img src={Profile} title='Profile-img' width={40} height={40}/></a>
    </span>
    { dropDown && <DropDown/>}
   </div>
    </div>
    <div className='border-b-2 ml-28 mr-40'></div>
    </div>
   </section>
  )
}

export default Navbar;
