import generalReducer from "./generalReducer";
import modalReducer from "./modalReducer";
import productListReducer from "./productListReducer";
import brandsReducer from "./brandsReducer";
import basketReducer from "./basketReducer";
import compareReducer from "./compareReducer";
import favoriteReducer from "./favoriteReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  general: generalReducer,
  modal: modalReducer,
  products: productListReducer,
  brands: brandsReducer,
  basket: basketReducer,
  compare: compareReducer,
  favorite: favoriteReducer,
});

export default rootReducer;
