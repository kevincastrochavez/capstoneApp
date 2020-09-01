import React from "react";
import FormTitle from "../FormTitle";
import SignInForm from "./SignInForm";

function SignIn() {
  return (
    <div className="sign-in">
      <div className="sign-in-wrapper">
        <FormTitle className="sign-in__title" text="Login" />
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
