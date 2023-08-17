import React from 'react';
import image from '../../../assests/Image/13021112.png';

const imgCom = (props) => (
  <img src={image} alt={props.alt} className={props.className}></img>
);

export default imgCom;
