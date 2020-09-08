import axios from "axios";

import { ROOT_URL } from "../config";

export function fetchProducts() {
  return function () {
    axios
      .get(`${ROOT_URL}/api/v1/products`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        if (err) {
          console.log(err.response);
        }
      });
  };
}
