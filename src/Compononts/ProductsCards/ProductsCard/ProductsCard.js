import React from "react";
import watchImg from "../../../assests/Image/yellow_watch.png";

const productsCard = (props) => (
  <div
    className={[
      "rounded-xl flex items-end px-6 py-5 relative xl:h-48 md:h-44 sm:36",
      props.styleClass,
    ].join(" ")}
  >
    <div className="flex flex-col ">
      <span className="font-light md:text-base text-sm">Enjoy</span>
      <span className="font-bold md:text-2xl text-lg">With</span>
      <span className={["spanTxtClass", props.spanTxtClass].join(" ")}>
        EARPHONE
      </span>
    </div>
    <img
      className="md:w-40 md:h-40 w-24 h-24 absolute right-6 top-5"
      src={watchImg}
    />
  </div>
);

export default productsCard;
