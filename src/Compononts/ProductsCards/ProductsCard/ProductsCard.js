import React from "react";

const productsCard = (props) => (
  <div
    className={["rounded-xl flex flex-col px-6 py-5", props.styleClass].join(
      " "
    )}
  >
    <span className="font-light md:text-base text-sm">Enjoy</span>
    <span className="font-bold md:text-2xl text-lg">With</span>
    <span className={props.spanTxtClass}>EARPHONE</span>
  </div>
);

export default productsCard;
