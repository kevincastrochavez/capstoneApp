import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { StateProvider } from "./components/StateProvider";
import reducer, { initialState } from "./components/reducer";
import Icons from "./components/Icons";
import Layout from "./components/Layout";
import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Cart from "./components/Cart";
import ShippingAdress from "./components/ShippingAdress";
import OrderDetailsContainer from "./components/OrderDetailsContainer";
import OrdersHistory from "./components/OrdersHistory";

import "./style/main.scss";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(
  compose(
    (window.devToolsExtension ? window.devToolsExtension() : (f) => f)(
      createStore
    )
  )
);

const stripePromise = loadStripe(
  "pk_test_51HKWmpIFSKqHStsPeEH97MmCrUjpZ0Q3HqkZMcda04P9b3DbtgRaLoKG0Tl1rjsUMtcgHTNzYYimU0XqKwrvL2oe00BWzIYSWq"
);

function Main() {
  Icons();

  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <StateProvider initialState={initialState} reducer={reducer}>
            <Layout>
              <Route path="/" exact component={Home} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/cart" exact component={Cart} />
              <Route
                path="/shipping-address"
                exact
                component={ShippingAdress}
              />
              <Elements stripe={stripePromise}>
                <Route
                  path="/order-details"
                  exact
                  component={OrderDetailsContainer}
                />
              </Elements>
              <Route path="/orders" exact component={OrdersHistory} />
            </Layout>
          </StateProvider>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", Main);
