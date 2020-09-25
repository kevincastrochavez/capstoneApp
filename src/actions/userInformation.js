import axios from "axios";

import { ROOT_URL } from "../config";
import { FETCH_USER_INFORMATION } from "./types";

export function addShippingInformation(fields, success) {
  const token = localStorage.getItem("token");
  return function () {
    axios
      .patch(`${ROOT_URL}/api/v1/users/updateMe`, fields, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        success();
      })
      .catch((err) => {
        if (err) {
          console.log(err.response);
        }
      });
  };
}

export function fetchUserInformation() {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    axios
      .get(`${ROOT_URL}/api/v1/users/me`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch({
          type: FETCH_USER_INFORMATION,
          payload: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
