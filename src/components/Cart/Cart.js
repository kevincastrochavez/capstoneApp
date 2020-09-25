import React from "react";
import BackTo from "../BackTo";
import CartProduct from "./CartProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "../Subtotal";

function Cart() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <BackTo to="/" />

      <div className="cart__left">
        <div>
          <h2 className="cart__left-title">Your shopping Basket</h2>
          <div className="cart__left-products">
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

      <div className="cart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
