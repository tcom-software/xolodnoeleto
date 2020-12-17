import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import { basketInitialState } from "./actions/basketActions";
import { loadCatalogList } from "./actions/catalogueActions";
import { getInitialReview } from "./actions/reviewActions";

/** window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ **/

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.dispatch(loadCatalogList());
store.dispatch(getInitialReview());
store.dispatch(basketInitialState());

export default store;
