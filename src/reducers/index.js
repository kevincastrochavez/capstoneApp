import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import auth from "./authReducer";
import products from "./productsReducer";
import sidebar from "./sidebarReducer";
import information from "./userInformationReducer";

const rootReducer = combineReducers({
  form,
  auth,
  products,
  sidebar,
  information,
});

export default rootReducer;
