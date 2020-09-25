import generalReducer from "./generalReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  general: generalReducer,
});

export default rootReducer;
