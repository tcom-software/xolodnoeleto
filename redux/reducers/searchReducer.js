import * as types from "../actions/searchActions";

const initialState = {
  loading: false,
  searched: [],
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case types.SEARCHING:
      return {
        ...state,
        searched: action.payload,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default generalReducer;
