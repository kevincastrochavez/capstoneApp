import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import ProductsContainer from "./ProductsContainer";

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

        <ProductsContainer />
      </div>
    );
  }
}

export default connect(null, actions)(ProductsInfo);
