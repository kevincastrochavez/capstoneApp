import React from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput } from "../formFields";

function SignInForm() {
  return (
    <form className="sign-in-form">
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
    </form>
  );
}

SignInForm = reduxForm({
  form: "signin",
})(SignInForm);

export default SignInForm;
