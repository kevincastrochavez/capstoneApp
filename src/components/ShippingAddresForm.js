import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "./formFields";

class ShippingAddressForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="shipping-address-form">
        <Field
          className="shipping-address-form__address1"
          component={FormInput}
          name="name"
          type="text"
          title="Address Line 1"
        />

        <Field
          className="shipping-address-form__address2"
          component={FormInput}
          name="email"
          type="text"
          title="Address Line 2"
        />

        <div className="shipping-address-form__small-inputs">
          <Field
            className="shipping-address-form__city"
            component={FormInput}
            name="password"
            type="text"
            title="City"
          />

          <Field
            className="shipping-address-form__zipcode"
            component={FormInput}
            name="createaccount"
            type="text"
            title="Zip Code"
          />
        </div>

        <Field
          className="shipping-address-form__country"
          component={FormInput}
          name="createaccount"
          type="text"
          title="Country"
        />
      </form>
    );
  }
}

ShippingAddressForm = reduxForm({
  form: "signup",
})(ShippingAddressForm);

export default ShippingAddressForm;
