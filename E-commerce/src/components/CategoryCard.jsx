import React from "react";
import "./CategoryCard.css";
import moniter from "../assets/th.jpg";

function CategoryCard(props) {
  return (
    <>
      <div id="category-card">
        <img src={moniter} alt="Category Card" />
        <h1>{props.name}</h1>
      </div>
    </>
  );
}

export default CategoryCard;
