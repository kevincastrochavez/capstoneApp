import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../actions";
import FormTitle from "./FormTitle";
import ShippingAddressForm from "./ShippingAddresForm";

class ShippingAddress extends Component {
  // onSubmit = (fields) => {
  //   this.props.signUp(fields, () => {
  //     console.log(fields);
  //     this.props.history.push("/checkout");
  //   });
  // };

  render() {
    return (
      <div className="shipping-address">
        <FormTitle
          className="shipping-address__title"
          text="Shipping Information"
        />
        <ShippingAddressForm onSubmit={(event) => this.onSubmit(event)} />
        <Link to="/order-details">
          <button
            className="shipping-address__button"
            onClick={(e) => history.push("/order-details")}
          >
            Checkout
          </button>
        </Link>
      </div>
    );
  }
}

export default connect(null, actions)(ShippingAddress);
