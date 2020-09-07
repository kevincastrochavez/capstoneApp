import axios from "axios";
import { ROOT_URL } from "../config";

export function signUp(fields, success) {
  return function (dispatch) {
    axios
      .post(`${ROOT_URL}/api/v1/users/signup`, fields)
      .then((response) => {
        console.log(response);
        const { token } = response.data;
        localStorage.setItem("token", token);
        dispatch({
          type: AUTHENTICATE_USER,
          payload: response.data,
        });
        success();
      })
      .catch((err) => {
        if (err) {
          console.log(err.response);
        }
      });
  };
}
