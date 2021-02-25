import * as types from "../actions/searchActions";

const initialState = {
  total: null,
  products: [],
  new_search: [],
  loading: false,
  new_loading: false,
  refForSearch: null,
  whereWasSearch: null,
  lastSearchedWord: "",
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
    case types.NEW_LOADING:
      return {
        ...state,
        total: null,
        new_loading: true,
      };
    case types.SEARCH:
      return {
        ...state,
        loading: false,
        ...action.payload,
        total: action.payload?.products_info?.total,
        products: [...action.payload.products],
      };
    case types.NEW_SEARCH:
      return {
        ...state,
        new_loading: false,
        ...action.payload,
        products: [...state.search, ...action.payload.products],
      };
    case types.WHERE_WAS_SEARCH:
      return {
        ...state,
        whereWasSearch: action.payload,
      };
    case types.SET_SEARCH_INPUT_VALUE:
      return {
        ...state,
        searchInputValue: action.payload,
      };
    case types.SET_NEW_REF_FOR_SEARCH:
      return {
        ...state,
        refForSearch: { ...action.payload },
      };
    case types.SELECTED_SEARCH_CATALOG:
      return {
        ...state,
        selectedSearchCatalog: action.payload,
      };
    case types.LAST_SEARCHED_WORD:
      return {
        ...state,
        lastSearchedWord: action.payload,
      };
    default:
      return { ...state };
  }
};

export default generalReducer;
