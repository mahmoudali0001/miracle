import React from 'react';

const textCom = (props) => {
  const firstLineClass = 'font-light';
  const secondLineClass = 'font-bold text-2xl';
  return (
    <div
      className={
        'rounded-xl flex flex-col bg-gradient-to-r px-6 py-5 mr-2 mt-[100px] ml-[24px]'
      }>
      <span className={[firstLineClass, props.className1].join(' ')}>
        {props.firstLine ? props.firstLine : 'Enjoy'}
      </span>
      <span className={[secondLineClass, props.className2].join(' ')}>
        {props.secondLine ? props.secondLine : 'With'}
      </span>
      <div className='w-full  text-center text-[12rem] text-white text font-extrabold'>
        <span className='w-fit'>HEADPHONE</span>
      </div>
    </div>
  );
};

export default textCom;
