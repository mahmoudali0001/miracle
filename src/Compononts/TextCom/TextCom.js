import React from 'react';
const textCom = (props) => {
  const firstLineClass = 'font-light';
  const secondLineClass = 'font-bold text-2xl';
  return (
    <div className={'rounded-xl flex flex-col justify-between'}>
      <span className={[firstLineClass, props.className1].join(' ')}>
        {props.firstLine ? props.firstLine : 'Enjoy'}
      </span>
      <span className={[secondLineClass, props.className2].join(' ')}>
        {props.secondLine ? props.secondLine : 'With'}
      </span>
      <span
        className={`text-white text-[15rem] font-extrabold leading-none p-0 m-0 ${
          props.txt3Color ? props.txt3Color : null
        }`}
        style={{ width: '100%' }}>
        {props.thirdLine ? props.thirdLine : 'EARPHONE'}
      </span>
    </div>
  );
};
export default textCom;
