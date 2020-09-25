import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStateValue } from "../StateProvider";

function CartIcon() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div cart-icon>
      <Link to="/cart" className="navbar__link shopping-cart">
        <div className="navbar__option">
          <FontAwesomeIcon icon="shopping-cart" />
        </div>
      </Link>

      <div className="navbar__number-wrapper">
        <p>{basket.length}</p>
      </div>
    </div>
  );
}

export default CartIcon;
