import React from "react";

import ProductsCard from "./ProductsCard/ProductsCard";

const ProductsCards = (props) => (
  <section className="grid md:grid-cols-4 grid-cols-2 gap-3 mx-2">
    <ProductsCard
      styleClass="md:col-span-1 col-span-2 bg-linear-black text-white"
      spanTxtClass="spanTxtClass"
    />
    <ProductsCard
      styleClass="md:col-span-1 col-span-1 bg-linear-yellow text-white"
      spanTxtClass="spanTxtClass"
    />
    <ProductsCard
      styleClass="md:col-span-2 col-span-1 bg-linear-red text-white"
      spanTxtClass="spanTxtClass"
    />
    <ProductsCard
      styleClass="md:col-span-2 col-span-2 bg-linear-gray"
      spanTxtClass="text-white spanTxtClass"
    />
    <ProductsCard
      styleClass="md:col-span-1 col-span-1 bg-linear-green text-white"
      spanTxtClass="spanTxtClass"
    />
    <ProductsCard
      styleClass="md:col-span-1 col-span-1 bg-linear-blue text-white"
      spanTxtClass="spanTxtClass"
    />
  </section>
);

export default ProductsCards;
