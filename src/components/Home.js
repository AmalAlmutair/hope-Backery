import React from "react";
import Product from "./Product";
import products from "./products";

const Home = () => {
  return (
    <div className="App-header">
      <h1 className="title">Hope Backery</h1>
      <img
        className="App-logo"
        src="https://fitfoodiefinds.com/wp-content/uploads/2019/02/muffin-2-sq.jpg"
        alt="Hope Backery"
      ></img>
      <p className="discription"> Best Maffine in Town</p>
      {/* list of Products */}
      <div className="product"></div>
      <Product product={products[0]}></Product>
      <Product product={products[1]}></Product>
    </div>
  );
};

export default Home;
