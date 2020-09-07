import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        <img
          className="navbar__logo-img"
          src="http://via.placeholder.com/200x150"
          alt="Logo Clothing Store"
        />
      </Link>

      <div className="navbar__search">
        <input type="text" className="navbar__searchInput" />
        <FontAwesomeIcon className="fa-search" icon="search" />
      </div>

      <div className="navbar__nav">
        <Link to="/signin" className="navbar__link">
          <div className="navbar__option">
            <span>Sign In</span>
          </div>
        </Link>

        <Link to="/" className="navbar__link">
          <div className="navbar__option">
            <span>My Account</span>
          </div>
        </Link>

        <Link to="/checkout" className="navbar__link">
          <div className="navbar__option">
            <FontAwesomeIcon icon="shopping-cart" />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
