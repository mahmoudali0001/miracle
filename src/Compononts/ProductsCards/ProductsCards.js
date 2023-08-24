import React from "react";

import ProductsCard from "./ProductsCard/ProductsCard";

const ProductsCards = (props) => (
  <section className="grid md:grid-cols-4 grid-cols-2 gap-3 mx-2">
    <ProductsCard styleClass="md:col-span-1 col-span-2 bg-linear-black text-white" />
    <ProductsCard styleClass="kkkk bg-linear-yellow text-white" />
    <ProductsCard styleClass="md:col-span-2 col-span-1 bg-linear-red text-white" />
    <ProductsCard
      styleClass="md:col-span-2 col-span-2 bg-linear-gray"
      spanTxtClass="text-white"
    />
    <ProductsCard styleClass="kkkk bg-linear-green text-white" />
    <ProductsCard styleClass="kkkk bg-linear-blue text-white" />
  </section>
);

export default ProductsCards;
