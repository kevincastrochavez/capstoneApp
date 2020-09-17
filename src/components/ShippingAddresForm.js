import React from "react";
import { TextField } from "@material-ui/core";

function ShippingAddressForm() {
  return (
    <form className="shipping-address-form">
      <div className="shipping-address-form__address1">
        <TextField
          type="text"
          id="standard-basic"
          label="Address 1"
          variant="standard"
        />
      </div>

      <div className="shipping-address-form__address2">
        <TextField
          type="text"
          id="standard-basic"
          label="Address 2"
          variant="standard"
        />
      </div>

      <div className="shipping-address-form__small-inputs">
        <div className="shipping-address-form__city">
          <TextField
            type="text"
            id="standard-basic"
            label="City"
            variant="standard"
          />
        </div>

        <div className="shipping-address-form__zipcode">
          <TextField
            type="text"
            id="standard-basic"
            label="Zip Code"
            variant="standard"
          />
        </div>
      </div>

      <div className="shipping-address-form__country">
        <TextField
          type="text"
          id="standard-basic"
          label="Country"
          variant="standard"
        />
      </div>
    </form>
  );
}

export default ShippingAddressForm;
