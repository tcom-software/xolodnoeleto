import generalReducer from "./generalReducer";
import modalReducer from "./modalReducer";
import productListReducer from "./productListReducer";
import brandsReducer from "./brandsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  general: generalReducer,
  modal: modalReducer,
  products: productListReducer,
  brands: brandsReducer,
});

export default rootReducer;
