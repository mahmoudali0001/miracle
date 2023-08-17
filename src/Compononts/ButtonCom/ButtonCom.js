import React from 'react';

const buttonCom = (props) => {
  return (
    <div>
      <button
        className={[
          'bg-blue-500 hover:bg-blue-600  font-bold py-2 px-2 rounded-xl my-[1rem] ml-[100px]',
          props.extraClass,
        ].join(' ')}>
        {props.children}
      </button>
    </div>
  );
};

export default buttonCom;
