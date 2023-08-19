import React from 'react';
import image from '../../../assests/Image/13021112.png';

const imgCom = (props) => (
  <div className=' absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]'>
    <img src={image} alt='newImage' className='w-80 h-96 z-99 ' />
  </div>
);

export default imgCom;
