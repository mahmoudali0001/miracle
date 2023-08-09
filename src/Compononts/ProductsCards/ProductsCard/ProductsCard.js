import React from "react";

const productsCard = (props) => (
  <div
    className={[
      "rounded-xl flex flex-col bg-gradient-to-r px-6 py-5",
      props.gridClass,
    ].join(" ")}
  >
    <span className="font-light">Enjoy</span>
    <span className="font-bold text-2xl">With</span>
    <span className={props.txt3Color}>EARPHONE</span>
  </div>
);

export default productsCard;
