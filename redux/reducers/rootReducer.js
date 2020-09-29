import generalReducer from "./generalReducer";
import modalReducer from "./modalReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  general: generalReducer,
  modal: modalReducer,
});

export default rootReducer;
