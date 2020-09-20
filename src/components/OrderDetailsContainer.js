import React from "react";
import OrderDetailsTitle from "./OrderDetailsTitle";
import OrderDetailsItems from "./OrderDetailsItems";
import OrderDetailsInfo from "./OrderDetailsInfo";

function OrderDetailsContainer() {
  return (
    <div className="order-details">
      <OrderDetailsTitle />
      <OrderDetailsInfo />
      <OrderDetailsItems />
    </div>
  );
}

export default OrderDetailsContainer;
