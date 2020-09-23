import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../TextLink";

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="sign-in-form">
        <Field
          className="sign-in-form__email"
          title="Email"
          placeholder="Enter your Email"
          name="email"
          type="email"
          component={FormInput}
        />

        <Field
          className="sign-in-form__password"
          title="Password"
          placeholder="Enter Password"
          name="password"
          type="password"
          component={FormInput}
        />

        <Field
          className="sign-in-form__login"
          title="Login"
          name="login"
          type="submit"
          component={FormButton}
        />

        <div className="sign-in-form__text-links">
          <TextLink to="#" text="Forgot Password" />
          <TextLink to="/signup" text="Create an Account" />
        </div>
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "signin",
})(SignInForm);

export default SignInForm;
