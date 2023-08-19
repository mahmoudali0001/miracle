import React from 'react';
import ButtonCom from '../../ButtonCom/ButtonCom';
import DescriptionCom from '../../DescriptionCom/DescriptionCom';
import TextCom from '../../TextCom/TextCom';
import ImageCom from './ImageCom';
import { BsQuestionCircle } from 'react-icons/bs';

const headerCard = (props) => (
  <div className=' my-2 mx-2 rounded-2xl w-auto h-auto relative bg-gradient-to-r from-[#d9d9d9] to-[#eee]'>
    <div className='flex flex-col rounded-2xl mb-5 mx-5 relative pt-52 pl-16'>
      <TextCom
        className1='text-4xl font-semibold'
        firstLine='Beats Solo'
        className2='text-8xl'
        secondLine='Wireless'
        thirdLine='HEADPHONE'
      />
      <ButtonCom extraClass='text-white bg-red-900 w-[150px] h-[40px] mt-4 '>
        More..
      </ButtonCom>
    </div>
    <ImageCom />
    <div className='flex justify-end'>
      <div className='bg-blue-900 w-fit rounded-full relative bottom-32'>
        <BsQuestionCircle size={70} color='white' />
      </div>
    </div>

    <DescriptionCom />
  </div>
);
export default headerCard;
