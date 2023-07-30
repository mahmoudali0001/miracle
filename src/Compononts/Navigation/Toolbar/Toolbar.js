import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
// import Logo from "../../Logo/Logo";
import Input from "../../SearchItem/SearchItem";

const Toolbar = (props) => {
  return (
    <header className="flex items-center justify-between mx-2 border-b-2 border-t-2 mt-1">
      <div>
        <div>Logo</div>
      </div>

      <div>
        <Input placeholder="Search" />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
