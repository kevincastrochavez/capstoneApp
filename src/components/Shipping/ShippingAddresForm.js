import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormButton, FormInput } from "../formFields";

class ShippingAddressForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="shipping-address-form">
        <Field
          className="shipping-address-form__address1"
          component={FormInput}
          name="address1"
          type="text"
          title="Address Line 1"
        />

        <Field
          className="shipping-address-form__address2"
          component={FormInput}
          name="address2"
          type="text"
          title="Address Line 2"
        />

        <div className="shipping-address-form__small-inputs">
          <Field
            className="shipping-address-form__city"
            component={FormInput}
            name="city"
            type="text"
            title="City"
          />

          <Field
            className="shipping-address-form__zipcode"
            component={FormInput}
            name="zipcode"
            type="text"
            title="Zip Code"
          />
        </div>

        <Field
          className="shipping-address-form__country"
          component={FormInput}
          name="country"
          type="text"
          title="Country"
        />

        <Field
          className="shipping-address-form__button"
          component={FormButton}
          name="checkout"
          type="text"
          title="Checkout"
        />
      </form>
    );
  }
}

ShippingAddressForm = reduxForm({
  form: "shippingAddress",
})(ShippingAddressForm);

export default ShippingAddressForm;
