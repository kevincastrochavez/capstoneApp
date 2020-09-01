import React from "react";
import FormTitle from "../FormTitle";
import SignUpForm from "./SignUpForm";

function SignIn() {
  return (
    <div className="sign-up">
      <div className="sign-up-wrapper">
        <FormTitle className="sign-up__title" text="Sign Up" />
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignIn;
