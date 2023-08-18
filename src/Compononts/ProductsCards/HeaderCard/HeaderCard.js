import React from 'react';
import ImageCom from './ImageCom';
import ButtonCom from '../../ButtonCom/ButtonCom';
import DescriptionCom from '../../DescriptionCom/DescriptionCom';
import TextCom from '../../TextCom/TextCom';

const headerCard = (props) => (
  <div className='bg-gray-400 my-2 mx-2 rounded-2xl w-auto h-auto relative '>
    <div className='flex rounded-2xl mb-5 mx-5 relative'>
      <TextCom
        txt3Color='thridTxtClass text-black text-6xl w-full'
        className1='text-4xl font-semibold'
        firstLine='Beats Solo'
        className2='text-8xl'
        secondLine='Wireless'
      />
    </div>
    <div>
      <ButtonCom extraClass='text-white bg-red-900  '>More..</ButtonCom>
    </div>
    <div className=' absolute top-[6rem] left-[38rem]'>
      <ImageCom alt='Image' className='w-72 h-96 z-50 mb-[4px]  ' />
    </div>

    <div className='flex justify-end mt-1'>
      <ButtonCom extraClass='text-white'>show me</ButtonCom>
    </div>
    <DescriptionCom />
  </div>
);

export default headerCard;
