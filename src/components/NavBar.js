import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import LogOutLink from "./LogOutLink";
import SignInLink from "./SignInLink";

class NavBar extends Component {
  render() {
    const categorySlide = () => {
      const bars = document.querySelector(".fa-bars");
      const category = document.querySelector(".categories__options-links");
      const categoryLinks = document.querySelectorAll(
        ".categories__options-links a"
      );

      bars.addEventListener("click", () => {
        category.classList.toggle("categories__options-links-active");

        categoryLinks.forEach((link, index) => {
          if (link.getElementsByClassName.animation) {
            link.getElementsByClassName.animation = "";
          } else {
            link.style.animation = `categoryBarFade 0.3s ease forwards ${
              index / 8 + 1.5
            }s`;
          }
        });
      });
    };

    return (
      <nav className="navbar">
        <FontAwesomeIcon
          className="fa-bars"
          icon="bars"
          onClick={categorySlide}
        />
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
