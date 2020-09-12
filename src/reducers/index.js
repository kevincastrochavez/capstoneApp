import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import auth from "./authReducer";
import products from "./productsReducer";
import sidebar from "./sidebarReducer";
import shop from "./shopReducer";

const rootReducer = combineReducers({
  form,
  auth,
  products,
  sidebar,
  shop,
});

export default rootReducer;
