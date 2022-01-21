import React from "react";
import products from "./products";

const Product = ({ product }) => {
  return (
    <div className="discription">
      <img className="image" src={product.image} alt="" />

      <h1 className="discription">{product.name}</h1>

      <p className="discription">{product.price}</p>
    </div>
  );
};

export default Product;
