import React from "react";
import Heading from "../Shape/Heading";
import ProductCard from "./ProductCard";
import { ProductsData } from "../../assets/assets";

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Head section */}
        <Heading title="Our Products" subtitle="Explore Our Products" />
        {/* Body section */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData} />
      </div>
    </div>
  );
};

export default Products;
