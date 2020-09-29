import React from "react";
import { useStateValue } from "../StateProvider";

function ProducstItem({ picture, price, name, _id }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        picture: picture,
        price: price,
        name: name,
        id: _id,
      },
    });
  };

  return (
    <div className="product">
      <img className="product__img" src={`public/img/${picture}`} />
      <div className="product__info">
        <div className="product__info-shown">
          <p className="product__info-shown-price">${price}</p>
          <button className="product__info-shown-button" onClick={addToBasket}>
            +
          </button>
        </div>
        <p className="product__info-hover">{name}</p>
      </div>
    </div>
  );
}

export default ProducstItem;
