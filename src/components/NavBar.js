import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import LogOutLink from "./LogOutLink";
import SignInLink from "./SignInLink";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link className="navbar__logo" to="/">
          <img
            className="navbar__logo-img"
            src="http://via.placeholder.com/200x150"
            alt="Logo Clothing Store"
          />
        </Link>

        <div className="navbar-wrapper">
          <div className="navbar__nav">
            {!this.props.authenticated ? <SignInLink /> : <LogOutLink />}

            <CartIcon />
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  const { authenticated } = state.auth;
  return { authenticated };
}

export default connect(mapStateToProps)(NavBar);
