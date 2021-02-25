import React from "react";
import Carousel from "../../components/carousel";
import ProductGrid from "../../components/productGrid";

const Store: React.FC = () => {
  return (
    <>
      <div>
        <Carousel />
        <ProductGrid />
      </div>
    </>
  );
};

export default Store;
