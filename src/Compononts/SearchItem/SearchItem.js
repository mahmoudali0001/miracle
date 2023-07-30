import React from "react";
import { BsSearch } from "react-icons/bs";

const input = (props) => (
  <div className="relative">
    <BsSearch className="absolute right-3 top-1/2 -translate-y-1/2 | cursor-pointer | text-cyan-600" />
    <input
      type="text"
      placeholder={props.placeholder}
      className="bg-gray-200 focus:outline-none py-2 px-6 rounded-full"
    />
  </div>
);

export default input;
