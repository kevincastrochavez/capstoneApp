import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as actions from "../../actions";

import FormTitle from "../FormTitle";
import SignInForm from "./SignInForm";

class SignIn extends Component {
  onSubmit = (fields) => {
    this.props.signIn(fields, () => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-wrapper">
        <Link className="sign__return-home" to="/">
          <FontAwesomeIcon className="fa-tshirt" icon="tshirt" />
        </Link>
          
          <FormTitle className="sign-in__title" text="Sign In" />
          <SignInForm onSubmit={(event) => this.onSubmit(event)} />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignIn);
