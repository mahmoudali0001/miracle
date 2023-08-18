import React from 'react';
import ImageCom from './ImageCom';
import ButtonCom from '../../ButtonCom/ButtonCom';
import DescriptionCom from '../../DescriptionCom/DescriptionCom';
import TextCom from '../../TextCom/TextCom';

const headerCard = (props) => (
  <div className=' my-2 mx-2 rounded-2xl w-auto h-auto relative bg-gradient-to-r from-[#d9d9d9] to-[#eee] '>
    <div className='flex rounded-2xl mb-5 mx-5 relative py-16 px-10'>
      <TextCom
        txt3Color='thridTxtClass text-black text-6xl w-full'
        className1='text-4xl font-semibold'
        firstLine='Beats Solo'
        className2='text-8xl'
        secondLine='Wireless'
      />
    </div>

    <ButtonCom extraClass='text-white bg-red-900  '>More..</ButtonCom>

    <ImageCom />
    <div className='flex justify-end mt-1'>
      <ButtonCom extraClass='text-white'>show me</ButtonCom>
    </div>
    <DescriptionCom />
  </div>
);

export default headerCard;
