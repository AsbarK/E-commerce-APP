// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductListing from "./ProductListing";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductListing />}>
          {/* <Route index element={<NavBar />}></Route> */}
          {/* <Route path="/products-list" element={<ProductListing />}></Route> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
