import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
  <ul className="flex justify-between">
    <NavigationItem>Home</NavigationItem>
    <NavigationItem>Sign In</NavigationItem>
    <NavigationItem>Cart</NavigationItem>
  </ul>
);

export default navigationItems;
