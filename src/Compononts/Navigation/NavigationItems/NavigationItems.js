import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="flex justify-between md:flex-row flex-col">
    <NavigationItem className="text-black font-bold">Home</NavigationItem>
    <NavigationItem className="text-gray-500">Shap</NavigationItem>
    <NavigationItem className="text-gray-500">About Us</NavigationItem>
    <NavigationItem className="text-gray-500">Contact Us</NavigationItem>
  </ul>
);

export default navigationItems;
