import * as types from "../actions/searchActions";

const initialState = {
  total: null,
  products: [],
  new_search: [],
  loading: false,
  new_loading: false,
  refForSearch: null,
  whereWasSearch: null,
  searchInputValue: "",
  selectedSearchCatalog: null,
  products_info: { total: 0 },
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        total: null,
        loading: true,
      };
      break;
    case types.NEW_LOADING:
      return {
        ...state,
        total: null,
        new_loading: true,
      };
      break;
    case types.SEARCH:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
      break;
    case types.NEW_SEARCH:
      return {
        ...state,
        new_loading: false,
        ...action.payload,
        products: [...state.search, ...action.payload.products],
      };
      break;
    case types.WHERE_WAS_SEARCH:
      return {
        ...state,
        whereWasSearch: action.payload,
      };
      break;
    case types.SET_SEARCH_INPUT_VALUE:
      return {
        ...state,
        searchInputValue: action.payload,
      };
      break;
    case types.SET_NEW_REF_FOR_SEARCH:
      return {
        ...state,
        refForSearch: { ...action.payload },
      };
      break;

    case types.SELECTED_SEARCH_CATALOG:
      return {
        ...state,
        selectedSearchCatalog: action.payload,
      };
      break;
    default:
      return { ...state };
  }
};

export default generalReducer;
