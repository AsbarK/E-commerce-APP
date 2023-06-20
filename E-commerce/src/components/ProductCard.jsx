import React from "react";

import "./ProductCard.css";

function ProductCard(props) {
  return (
    <>
      <div id="product-card">
        <img src="../assets/th.jpg" alt="Product Image" />
        <div id="product-card-heading">
          <h1>{props.name}</h1>
          <h3>{props.price}</h3>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
