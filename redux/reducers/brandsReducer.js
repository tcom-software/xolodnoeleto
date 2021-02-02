import * as types from "../actions/brandsActions";

const initialState = {
  brandsLandingPage: null,
  brandsBrandPage: null,
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LANDING_PAGE:
      return {
        ...state,
        brandsLandingPage: action.payload,
      };
      return;
    case types.BRANDS_WITH_PAGE:
      return {
        ...state,
        brandsBrandPage: action.payload,
      };
    default:
      return { ...state };
  }
};

export default brandsReducer;
