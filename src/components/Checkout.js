import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__left-title">Your shopping Basket</h2>
          <div className="checkout__left-products">
            {basket.map((item) => {
              return (
                <CheckoutProduct
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

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
