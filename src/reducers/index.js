import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import auth from "./authReducer";
import products from "./productsReducer";
import sidebar from "./sidebarReducer";
import shop from "./shopReducer";
import information from "./userInformationReducer";

const rootReducer = combineReducers({
  form,
  auth,
  products,
  sidebar,
  shop,
  information,
});

export default rootReducer;
