import React from "react";
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";

function OrderDetails() {
  const [{ basket }, dispatch] = useStateValue();

  const handleClick = () => {
    console.log("Send to checkout");
  };

  return (
    <div className="order-details__items">
      <div className="order-details__items-section review-items">
        <div className="order-details__items-section-title review-items-title">
          <h3>
            Review<br></br> Items
          </h3>
        </div>

        <div className="order-details__items-section-items">
          {basket.map((item) => {
            return (
              <CartProduct
                id={item.id}
                name={item.name}
                picture={item.picture}
                price={item.price}
              />
            );
          })}
        </div>
      </div>

      <div className="order-details__items-section checkout-button">
        <button onClick={handleClick}>Checkout</button>
      </div>
    </div>
  );
}

export default OrderDetails;
