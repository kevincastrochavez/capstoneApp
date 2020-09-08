import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import auth from "./authReducer";
import products from "./productsReducer";

const rootReducer = combineReducers({
  form,
  auth,
  products,
});

export default rootReducer;
