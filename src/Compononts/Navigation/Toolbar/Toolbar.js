import React from "react";

import { BsSearch, BsCart3, BsPerson } from "react-icons/bs";

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../NavigationItems/SideDrawer/DrawerToggle/DrawerToggle";
import Logo from "../../Logo/Logo";

const Toolbar = (props) => {
  return (
    <header className="flex items-center justify-between | lg:mx-3 md:mx-2 mx-1 | min-h-[48px] box-border">
      <DrawerToggle clicked={props.drawerToggleClicked} />

      <div className="flex ">
        <Logo />

        <nav className="md:inline-block hidden">
          <NavigationItems />
        </nav>
      </div>

      <div className="flex gap-x-5 justify-center items-center cursor-pointer">
        <div className="md:inline-block hidden">Login</div>
        <BsPerson className="md:hidden inline-block" />
        <BsSearch />
        <BsCart3 />
      </div>
    </header>
  );
};

export default Toolbar;
