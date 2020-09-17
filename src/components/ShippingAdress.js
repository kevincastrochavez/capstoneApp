import React from "react";

import FormTitle from "./FormTitle";
import ShippingAddressForm from "./ShippingAddresForm";

function ShippingAddress() {
  return (
    <div className="shipping-address">
      <FormTitle
        className="shipping-address__title"
        text="Shipping Information"
      />
      <ShippingAddressForm onSubmit={(event) => this.onSubmit(event)} />
      <button
        className="shipping-address__button"
        onClick={() => console.log("Click")}
      >
        Checkout
      </button>
    </div>
  );
}

export default ShippingAddress;
