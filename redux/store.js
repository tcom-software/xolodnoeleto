import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import { basketInitialState } from "./actions/basketActions";
import { loadCatalogList } from "./actions/catalogActions";
import { getInitialReview } from "./actions/reviewActions";
import { newProducts } from "./actions/productListAction";
import { getBrands } from "./actions/brandsActions";
import { getCertificates } from "./actions/generalActions";

/** window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ **/

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("xl");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("xl", serializedState);
  } catch (err) {}
};

const store = createStore(
  rootReducer,
  loadState(),
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.dispatch(getCertificates());
store.dispatch(getBrands());
store.dispatch(newProducts());
store.dispatch(loadCatalogList());
store.dispatch(getInitialReview());
store.dispatch(basketInitialState());

store.subscribe(() => saveState(store.getState()));

export default store;
