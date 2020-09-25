import React from "react";

import NavBar from "./NavBar";
import CategoryBar from "./CategoryBar";
import ProductsInfo from "./Products/ProductsInfo";

function Home() {
  return (
    <div className="home">
      <NavBar />
      <CategoryBar />
      <ProductsInfo />
    </div>
  );
}

export default Home;
