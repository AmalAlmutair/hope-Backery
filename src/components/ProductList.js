import React from "react";
import Product from "./Product";
import products from "./products";

const ProductList = () => {
  return (
    <div>
      <div className="App-header">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
