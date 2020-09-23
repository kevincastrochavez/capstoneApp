import React from "react";
import OrderDetailsTitle from "./OrderDetailsTitle";
import OrderDetailsItems from "./OrderDetailsItems";
import OrderDetailsInfo from "./OrderDetailsInfo";
import OrderDetailsPayment from "./OrderDetailsPayment";

function OrderDetailsContainer() {
  return (
    <div className="order-details">
      <OrderDetailsTitle />
      <OrderDetailsInfo />
      <OrderDetailsItems />
      <OrderDetailsPayment />
    </div>
  );
}

export default OrderDetailsContainer;
