import React, { Component } from "react";

import ProductsContainer from "./ProductsContainer";

class ProductsInfo extends Component {
  render() {
    return (
      <div className="products__info">
        <img
          className="products__info-image"
          src="http://via.placeholder.com/1100x200"
        />

        <ProductsContainer />
      </div>
    );
  }
}

export default ProductsInfo;
