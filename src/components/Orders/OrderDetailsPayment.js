import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import axios from "../axios";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";

function OrderDetailsPayment() {
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    console.log("clientSecret", clientSecret);

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
    <div className="order-details__payment">
      <div className="order-details__payment-section">
        <div className="order-details__payment-section-title">
          <h3>Payment</h3>
        </div>

        <div className="order-details__payment-section-details">
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

              <button disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>

            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsPayment;
