import React from 'react';
import ImageCom from './ImageCom';
import ButtonCom from '../../ButtonCom/ButtonCom';
import DescriptionCom from '../../DescriptionCom/DescriptionCom';
import TextCom from '../../TextCom/TextCom';

const headerCard = (props) => (
  <div>
    <div className='flex rounded-2xl mb-5 mx-5 relative bg-white'>
      <TextCom
        txt3Color='thridTxtClass text-black text-8xl'
        className1='text-4xl font-semibold'
        firstLine='Beats Solo'
        secondLine=' '
        thirdLine='Wireless'
      />
      <ImageCom alt='Image' className='ml-[350px] mr-auto mt-10 w-72 h-96' />
    </div>
    <div className='flex justify-end mt-1'>
      <ButtonCom extraClass='text-white'>show me</ButtonCom>
    </div>
    <DescriptionCom />
    <ButtonCom extraClass='text-white '>More..</ButtonCom>
  </div>
);

export default headerCard;
