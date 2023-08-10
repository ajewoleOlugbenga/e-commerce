import React from 'react';
import CartImg from '../images/image-product-1-thumbnail.jpg';

const DropDown = () => {
  return (
    <div className='flex flex-col absolute top-4 right-4 w-50 h-auto'>
      <div className='flex flex-col'>
      <h2>Cart</h2>
      <div></div>
      <div>
        <img src={CartImg} 
        alt='Cart'
        width={30}
        height={45}
        />
        <p>Fall Limited Edition
          <br/>
          $125.00 * 3 $375.00
        </p>
        <div>Checkout</div>
      </div>
</div>
    </div>
  )
}

export default DropDown