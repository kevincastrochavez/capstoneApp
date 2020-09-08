import React, { Component } from "react";

class ProducstItem extends Component {
  render() {
    const { picture, price, name } = this.props;

    return (
      <div className="product">
        <img className="product__img" src={picture} />
        <div className="product__info">
          <div className="product__info-shown">
            <p className="product__info-shown-price">{price}</p>
            <button className="product__info-shown-button">+</button>
          </div>
          <p className="product__info-hover">{name}</p>
        </div>
      </div>
    );
  }
}

export default ProducstItem;
