import React, { Component, Fragment } from "react";

import NavigationItems from "../../Compononts/Navigation/NavigationItems/NavigationItems";
import Toolbar from "../../Compononts/Navigation/Toolbar/Toolbar";

class Layout extends Component {
  state = {
    sideDrawerToggle: false,
  };

  render() {
    return (
      <>
        <Toolbar />
        <main className="">{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
