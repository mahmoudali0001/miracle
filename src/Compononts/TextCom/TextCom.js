import React from 'react';

const textCom = (props) => {
  const firstLineClass = 'font-light';
  const secondLineClass = 'font-bold text-2xl';
  return (
    <div
      className={
        'rounded-xl flex flex-col bg-gradient-to-r px-6 py-5 mr-2 mt-[100px] ml-[100px]'
      }>
      <span className={[firstLineClass, props.className1].join(' ')}>
        {props.firstLine ? props.firstLine : 'Enjoy'}
      </span>
      <span className={[secondLineClass, props.className2].join(' ')}>
        {props.secondLine ? props.secondLine : 'With'}
      </span>
      <span className={props.txt3Color}>
        {props.thirdLine ? props.thirdLine : 'EARPHONE'}
      </span>
    </div>
  );
};

export default textCom;
