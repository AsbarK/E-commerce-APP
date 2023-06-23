import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div id="nav-bar">
        <h1>Title</h1>
        <ul id="nav-lsit">
          <li className="nav-elements">Categories</li>
          <li className="nav-elements">Deals</li>
          <li className="nav-elements">What's New</li>
          <li className="nav-elements">Delivery</li>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
