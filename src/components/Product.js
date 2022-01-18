import React from "react";
import products from "./products";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h1>{product.name}</h1>
      <p>{product.price}</p>
    </div>
  );
};

export default Product;
