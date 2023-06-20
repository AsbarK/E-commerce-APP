import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar.jsx";
import ProductCard from "./components/ProductCard.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <ProductCard name="ASUS" price="27,490" />
    {/* <App /> */}
  </React.StrictMode>
);
