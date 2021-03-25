import generalReducer from "./generalReducer";
import modalReducer from "./modalReducer";
import productListReducer from "./productListReducer";
import brandsReducer from "./brandsReducer";
import basketReducer from "./basketReducer";
import compareReducer from "./compareReducer";
import favoriteReducer from "./favoriteReducer";
import catalogReducer from "./catalogReducer";
import reviewReducer from "./reviewReducer";
import productReducer from "./productReducer";
import searchReducer from "./searchReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  general: generalReducer,
  modal: modalReducer,
  products: productListReducer,
  brands: brandsReducer,
  basket: basketReducer,
  compare: compareReducer,
  favorite: favoriteReducer,
  catalog: catalogReducer,
  review: reviewReducer,
  product: productReducer,
  search: searchReducer,
});

export default rootReducer;
