import axios from "axios";

import { ROOT_URL } from "../config";
import { SET_PRODUCTS } from "./types";

export function fetchProducts() {
  return function (dispatch) {
    axios
      .get(`${ROOT_URL}/api/v1/products`)
      .then((response) => {
        console.log(response.data.data.products);
        dispatch({
          type: SET_PRODUCTS,
          payload: response.data.data.products,
        });
      })
      .catch((err) => {
        if (err) {
          console.log(err.response);
        }
      });
  };
}
