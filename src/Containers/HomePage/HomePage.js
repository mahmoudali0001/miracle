import React, { Component } from 'react';

import ProductsCards from '../../Compononts/ProductsCards/ProductsCards';
import HeaderCardComponent from '../../Compononts/HeaderCard/HeaderCard';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderCardComponent />
        <ProductsCards />;
      </div>
    );
  }
}

export default HomePage;
