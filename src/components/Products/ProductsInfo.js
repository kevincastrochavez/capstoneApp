import React, { Component } from "react";

import ProductsContainer from "./ProductsContainer";

class ProductsInfo extends Component {
  render() {
    return (
      <div className="products__info">
        <ProductsContainer />
      </div>
    );
  }
}

export default ProductsInfo;
