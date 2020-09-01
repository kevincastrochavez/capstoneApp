import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout";
import reducers from "./reducers";

import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

const createStoreWithMiddleware = applyMiddleware()(
  compose(
    (window.devToolsExtension ? window.devToolsExtension() : (f) => f)(
      createStore
    )
  )
);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" exact component={SignUp} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
