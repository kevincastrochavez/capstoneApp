import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

import FormTitle from "../FormTitle";
import SignUpForm from "./SignUpForm";

class SignUp extends Component {
  onSubmit = (fields) => {
    this.props.signUp(fields, () => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="sign-up">
        <div className="sign-up-wrapper">
          <FormTitle className="sign-up__title" text="Sign Up" />
          <SignUpForm onSubmit={(event) => this.onSubmit(event)} />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignUp);
