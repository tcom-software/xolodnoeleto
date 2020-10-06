import generalReducer from "./generalReducer";
import modalReducer from "./modalReducer";
import productListReducer from "./productListReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  general: generalReducer,
  modal: modalReducer,
  products: productListReducer,
});

export default rootReducer;
