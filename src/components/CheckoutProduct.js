import React from "react";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, name, picture, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__picture"
        src={"http://via.placeholder.com/150x150"}
      />

      <div className="checkoutProduct__info">
        <div className="checkoutProduct__info-wrapper">
          <p className="checkoutProduct__info-name">{name}</p>
          <p className="checkoutProduct__info-price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
