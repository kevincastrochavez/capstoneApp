import React from "react";
import { useStateValue } from "../StateProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CartProduct({ id, name, picture, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__picture" src={`public/img/${picture}`} />

      <div className="cartProduct__info">
        <div className="cartProduct__info-wrapper">
          <p className="cartProduct__info-name">{name}</p>
          <p className="cartProduct__info-price">
            <small>$</small>
            <p>{price}</p>
          </p>
        </div>
        <FontAwesomeIcon
          onClick={removeFromBasket}
          className="fa-trash"
          icon="trash"
        />
      </div>
    </div>
  );
}

export default CartProduct;
