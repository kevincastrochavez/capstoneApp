import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";
import axios from "./axios";
import { useHistory } from "react-router";

function OrderDetails() {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/create?total=${getBasketTotal(basket) * 100}`,
      });

      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);
  console.log("The secret is", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(() => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/order-success");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
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

      <div className="order-details__items-section checkout-section">
        <form onSubmit={handleSubmit}>
          <CardElement onChange={handleChange} />
          <div className="order-details_price-container">
            <CurrencyFormat
              renderText={(value) => <h3>Order Total: {value}</h3>}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
            <button
              // onClick={(e) => history.push("/")}
              disabled={processing || disabled || succeeded}
            >
              <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
            </button>
          </div>

          {error && <div>{error}</div>}
        </form>
      </div>
    </div>
  );
}

export default OrderDetails;
