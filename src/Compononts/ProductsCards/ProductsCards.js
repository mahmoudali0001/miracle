import React from "react";

import ProductsCard from "./ProductsCard/ProductsCard";

const ProductsCards = (props) => (
  <section className="grid grid-cols-4 gap-3 ">
    <ProductsCard
      gridClass="col-span-1 from-[#222] to-[#373737] text-white"
      txt3Color="thridTxtClass"
    />
    <ProductsCard
      gridClass="col-span-1 from-[#fbc82e] to-[#f9c234] text-white"
      txt3Color="thridTxtClass"
    />
    <ProductsCard
      gridClass="col-span-2 from-[#f32d3c] to-[#fc4750] text-white"
      txt3Color="thridTxtClass"
    />
    <ProductsCard
      gridClass="col-span-2 from-[#ececec] to-[#eeedf2]"
      txt3Color="text-white text-4xl font-bold"
    />
    <ProductsCard
      gridClass="col-span-1 from-[#2cd06f] to-[#40c87cc9] text-white"
      txt3Color="thridTxtClass"
    />
    <ProductsCard
      gridClass="col-span-1 from-[#157cff] to-[#1d8bfb] text-white"
      txt3Color="thridTxtClass"
    />
  </section>
);

export default ProductsCards;
