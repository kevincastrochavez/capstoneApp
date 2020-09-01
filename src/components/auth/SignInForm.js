import React from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput } from "../formFields";

function SignInForm() {
  return (
    <form className="sign-in-form">
      <Field
        className="sign-in-form__email"
        component={FormInput}
        name="email"
        type="email"
      />
    </form>
  );
}

SignInForm = reduxForm({
  form: "signin",
})(SignInForm);

export default SignInForm;
