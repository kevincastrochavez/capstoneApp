import React from "react";
import OrderDetailsTitle from "./OrderDetailsTitle";
import OrderDetailsItems from "./OrderDetailsItems";
import OrderDetailsInfo from "./OrderDetailsInfo";
import OrderDetailsPayment from "./OrderDetailsPayment";
import BackTo from "../BackTo";

function OrderDetailsContainer() {
  return (
    <div className="order-details">
      <BackTo to="/shipping-address" />

      <OrderDetailsTitle />
      <OrderDetailsInfo />
      <OrderDetailsItems />
      <OrderDetailsPayment />
    </div>
  );
}

export default OrderDetailsContainer;
