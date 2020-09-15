import React from "react";
import { Link } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";

function OrderDetails() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="order-details">
      <div className="order-details__container">
        <h1>
          Order Details (<Link to="/cart">{basket.length} items</Link>)
        </h1>
        <div className="order-details__container-section">
          <div className="order-details__container-section-title">
            <h3>Delivery Address</h3>
          </div>

          <div className="order-details__container-section-address">
            <p>User Email</p>
            <p>123 Cuautla</p>
            <p>Morelos, México</p>
          </div>
        </div>

        <div className="order-details__container-section review-items">
          <div className="order-details__container-section-title review-items-title">
            <h3>Review items</h3>
          </div>

          <div className="order-details__container-section-items">
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

        <div className="order-details__container-section checkout-button">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
