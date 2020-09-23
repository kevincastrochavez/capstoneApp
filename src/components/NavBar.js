import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStateValue } from "./StateProvider";

function NavBar() {
  const [{ basket }, dispatch] = useStateValue();

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
          <Link to="/signin" className="navbar__link">
            <div className="navbar__option">
              <span>Sign In</span>
            </div>
          </Link>

          <Link to="/cart" className="navbar__link shopping-cart">
            <div className="navbar__option">
              <FontAwesomeIcon icon="shopping-cart" />
            </div>
          </Link>

          <div className="navbar__number-wrapper">
            <p>{basket.length}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
