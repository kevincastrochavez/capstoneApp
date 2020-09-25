import React from "react";

import CartProduct from "../Cart/CartProduct";
import { useStateValue } from "../StateProvider";

function OrderDetailsItems() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="order-details__items">
      <div className="order-details__items-section review-items">
        <div className="order-details__items-section-title review-items-title">
          <h3>
            Review<br></br> Items
          </h3>
        </div>

        <div className="order-details__items-section-items">
          {basket.map((item, key) => {
            return (
              <CartProduct
                key={item.id}
                id={item.id}
                name={item.name}
                picture={item.picture}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsItems;
