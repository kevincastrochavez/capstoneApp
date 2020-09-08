import React, { Component } from "react";

import { connect } from "react-redux";

import ProductsItem from "./ProductsItem";

class ProductsContainer extends Component {
  render() {
    return (
      <div className="products__info-container">
        {this.props.product.map((productItem) => {
          return <ProductsItem {...productItem} key={productItem._id} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { product } = state.products;

  return {
    product,
  };
}

export default connect(mapStateToProps)(ProductsContainer);
