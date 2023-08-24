import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="flex justify-between md:flex-row flex-col ">
    <NavigationItem path="/" className="text-black font-bold">
      Home
    </NavigationItem>
    <NavigationItem path="/shap" className="text-gray-500">
      Shap
    </NavigationItem>
    <NavigationItem path="/aboutus" className="text-gray-500">
      About Us
    </NavigationItem>
    <NavigationItem path="/contactus" className="text-gray-500">
      Contact Us
    </NavigationItem>
  </ul>
);

export default navigationItems;
