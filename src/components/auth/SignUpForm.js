import React from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../formFields";
import TextLink from "../TextLink";

function SignUpForm() {
  return (
    <form className="sign-up-form">
      <Field
        className="sign-up-form__fullname"
        placeholder="Enter Your Full Name"
        component={FormInput}
        name="fullname"
        type="text"
        title="Full Name"
      />

      <Field
        className="sign-up-form__email"
        placeholder="Enter Email"
        component={FormInput}
        name="email"
        type="email"
        title="Email"
      />

      <Field
        className="sign-up-form__password"
        placeholder="Enter Password"
        component={FormInput}
        name="password"
        type="password"
        title="Password"
      />

      <Field
        className="sign-up-form__create-account"
        component={FormButton}
        name="createaccount"
        type="submit"
        title="Create Account"
      />

      <div className="sign-up-form__text-links">
        <TextLink to="/signin" text="Already Registered? Login" />
      </div>
    </form>
  );
}

SignUpForm = reduxForm({
  form: "signup",
})(SignUpForm);

export default SignUpForm;
