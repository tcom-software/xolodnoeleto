import * as types from "../actions/brandsActions";

const initialState = {
  brandsLandingPage: null,
  brandsBrandPage: null,
  brandProducts: null,
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
    case types.BRAND_PRODUCTS:
      return {
        ...state,
        brandProducts: action.payload,
      };
    default:
      return { ...state };
  }
};

export default brandsReducer;
