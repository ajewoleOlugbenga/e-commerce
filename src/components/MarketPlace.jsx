import React from 'react';
import MarketPics from './MarketPics';
import MarketPics2 from './MarketPics2';
import Card from './Cards';
const MarketPlace = () => {
  return (
    <React.Fragment>
        
        <div className='flex items-center max-w-screen mx-auto sm:overflow-hidden'>
        <div className='ml-36 md:shrink-0 sm:text-left'>
            <MarketPics/>
            <MarketPics2/>
        </div>
        <div>
            <Card/>
        </div>
        </div>
        
    </React.Fragment>
  )
}

export default MarketPlace
