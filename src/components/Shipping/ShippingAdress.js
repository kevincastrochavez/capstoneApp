import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import FormTitle from "../FormTitle";
import ShippingAddressForm from "./ShippingAddresForm";
import BackTo from "../BackTo";

class ShippingAddress extends Component {
  onSubmit = (fields) => {
    this.props.addShippingInformation(fields, () => {
      this.props.history.push("/order-details");
    });
  };

  render() {
    return (
      <div className="shipping-address">
        <BackTo to="/cart" />

        <FormTitle
          className="shipping-address__title"
          text="Shipping Information"
        />
        <ShippingAddressForm onSubmit={(event) => this.onSubmit(event)} />
      </div>
    );
  }
}

export default connect(null, actions)(ShippingAddress);
