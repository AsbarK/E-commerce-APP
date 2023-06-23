import React from "react";

import "./ProductCard.css";
import moniter from "../assets/th.jpg";

function ProductCard(props) {
  return (
    <>
      <div id="product-card">
        <img src={moniter} alt="Product Image" />
        <div id="product-card-heading">
          <h2>{props.name}</h2>
          <h3>{props.price}</h3>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
