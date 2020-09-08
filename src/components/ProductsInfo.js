import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import ProductItem from "./ProductItem";

class ProductsInfo extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="products__info">
        <img
          className="products__info-image"
          src="http://via.placeholder.com/1100x200"
        />

        <div className="products__info-container">
          <ProductItem
            id={1}
            name={"product"}
            price={20}
            picture={"https://via.placeholder.com/40x150"}
          />

          <ProductItem
            id={1}
            name={"product"}
            price={20}
            picture={"https://via.placeholder.com/40x150"}
          />

          <ProductItem
            id={1}
            name={"product"}
            price={20}
            picture={"https://via.placeholder.com/40x150"}
          />

          <ProductItem
            id={1}
            name={"product"}
            price={20}
            picture={"https://via.placeholder.com/40x150"}
          />

          <ProductItem
            id={1}
            name={"product"}
            price={20}
            picture={"https://via.placeholder.com/40x150"}
          />

          <ProductItem
            id={1}
            name={"product"}
            price={20}
            picture={"https://via.placeholder.com/40x150"}
          />

          <ProductItem
            id={1}
            name={"product"}
            price={20}
            picture={"https://via.placeholder.com/40x150"}
          />

          <ProductItem
            id={1}
            name={"product"}
            price={20}
            picture={"https://via.placeholder.com/40x150"}
          />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(ProductsInfo);
