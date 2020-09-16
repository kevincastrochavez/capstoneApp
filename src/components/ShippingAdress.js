import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../actions";
import FormTitle from "./FormTitle";
import ShippingAddressForm from "./ShippingAddresForm";

class ShippingAddress extends Component {
  onSubmit = (fields) => {
    this.props.signUp(fields, () => {
      console.log(fields);
      this.props.history.push("/checkout");
    });
  };

  render() {
    return (
      <div className="shipping-address">
        <FormTitle
          className="shipping-address__title"
          text="Shipping Information"
        />
        <ShippingAddressForm onSubmit={(event) => this.onSubmit(event)} />
        <button
          className="shipping-address__button"
          onClick={(event) => this.onSubmit(event)}
        >
          Checkout
        </button>
      </div>
    );
  }
}

export default connect(null, actions)(ShippingAddress);
