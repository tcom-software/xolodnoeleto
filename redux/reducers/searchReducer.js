import * as types from "../actions/searchActions";

const initialState = {
  loading: false,
  search: [],
  new_loading: false,
  new_search: [],
  total: null,
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
      const { searchResponse, total } = action.payload;
      return {
        ...state,
        total: total ? total : null,
        loading: false,
        search: searchResponse ? searchResponse : [],
      };
      break;
    case types.NEW_SEARCH:
      return {
        ...state,
        new_loading: false,
        total: action.payload.total,
        search: [...state.search, ...action.payload.searchResponse],
      };
      break;
    default:
      return { ...state };
  }
};

export default generalReducer;
