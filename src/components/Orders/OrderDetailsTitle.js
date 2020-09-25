import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

function OrderDetails() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="order-details__title">
      <h1>
        Order Details (<Link to="/cart">{basket.length} items</Link>)
      </h1>
    </div>
  );
}

export default OrderDetails;
