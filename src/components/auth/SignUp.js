import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
          <Link className="sign__return-home" to="/">
            <FontAwesomeIcon className="fa-tshirt" icon="tshirt" />
          </Link>

          <FormTitle className="sign-up__title" text="Sign Up" />
          <SignUpForm onSubmit={(event) => this.onSubmit(event)} />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(SignUp);
