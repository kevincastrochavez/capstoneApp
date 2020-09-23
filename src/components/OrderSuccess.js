import React from "react";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function OrderSuccess() {
  const history = useHistory();

  return (
    <div className="order-success">
      <h1>Your order has been placed successfully!</h1>

      <div className="order-success__icon">
        <FontAwesomeIcon className="fa-check" icon="check" />
      </div>

      <p>
        We'll contact you via email with further instructions about your order
      </p>

      <button onClick={() => history.push("/")}>Back to Shop</button>
    </div>
  );
}

export default OrderSuccess;
