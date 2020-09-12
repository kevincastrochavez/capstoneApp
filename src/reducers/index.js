import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import auth from "./authReducer";
import products from "./productsReducer";
import sidebar from "./sidebarReducer";

const rootReducer = combineReducers({
  form,
  auth,
  products,
  sidebar,
});

export default rootReducer;
