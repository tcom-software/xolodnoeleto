import * as types from "../actions/searchActions";
import {
  SET_RESERVED_CATALOG_LIST_DATA,
  setReservedCatalogListData,
} from "../actions/searchActions";

const initialState = {
  products: [],
  new_search: [],
  loading: false,
  new_loading: false,
  refForSearch: null,
  whereWasSearch: null,
  lastSearchedWord: "",
  searchInputValue: "",
  reservedCatalogListInfo: null,
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
      };
    case types.NEW_SEARCH:
      return {
        ...state,
        new_loading: false,
        ...action.payload,
        products: [...state.products, ...action.payload.products],
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
    case types.SET_RESERVED_CATALOG_LIST_DATA:
      return {
        ...state,
        reservedCatalogListInfo: action.payload,
      };
    default:
      return { ...state };
  }
};

export default generalReducer;
