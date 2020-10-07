import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import { basketInitialState } from "./actions/basketActions";

/** window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ **/
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.dispatch(basketInitialState());

export default store;
