import React from "react";
import FormTitle from "../FormTitle";
import SignInForm from "./SignInForm";

function SignIn() {
  // onsubmit();

  return (
    <div className="sign-in">
      <div className="sign-in-wrapper">
        <FormTitle className="sign-in__title" text="Sign In" />
        <SignInForm />
      </div>
    </div>
  );
}

export default SignIn;
