import React from "react";

const navigationItem = (props) => (
  <li className="text-green-800 p-3">
    <a href="#" clicked={props.clicked}>
      {props.children}
    </a>
  </li>
);

export default navigationItem;
