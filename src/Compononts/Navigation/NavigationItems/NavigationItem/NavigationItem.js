import React from "react";

const navigationItem = (props) => (
  <li className={"p-3 " + props.className}>
    <a href="#" clicked={props.clicked}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
