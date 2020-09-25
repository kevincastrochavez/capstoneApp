import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "./Cart/CartIcon";
import LogOutLink from "./LogOutLink";
import SignInLink from "./SignInLink";

class NavBar extends Component {
  render() {
    const categorySlide = () => {
      const burger = document.querySelector(".burger");
      const category = document.querySelector(".categories__options-links");
      const categoryLinks = document.querySelectorAll(
        ".categories__options-links a"
      );

      category.classList.toggle("categories__options-links-active");

      categoryLinks.forEach((link, index) => {
        link.style.animation = `categoryBarFade 0.3s ease forwards ${
          index / 10 + 1.5
        }s`;
      });

      burger.classList.toggle("toggle");
    };

    return (
      <nav className="navbar">
        <div className="burger" onClick={() => categorySlide()}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <Link className="navbar__logo" to="/">
          <FontAwesomeIcon className="fa-tshirt" icon="tshirt" />
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
