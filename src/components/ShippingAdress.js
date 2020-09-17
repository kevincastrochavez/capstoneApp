import React from "react";
import { useHistory } from "react-router";

import FormTitle from "./FormTitle";
import ShippingAddressForm from "./ShippingAddresForm";

function ShippingAddress() {
  const history = useHistory();

  return (
    <div className="shipping-address">
      <FormTitle
        className="shipping-address__title"
        text="Shipping Information"
      />
      <ShippingAddressForm onSubmit={(event) => this.onSubmit(event)} />
      <button
        className="shipping-address__button"
        onClick={(e) => history.push("/order-details")}
      >
        Checkout
      </button>
    </div>
  );
}

export default ShippingAddress;
