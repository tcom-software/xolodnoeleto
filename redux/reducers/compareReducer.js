import * as types from "../actions/compareActions";

const initialState = {
  compareProducts: {},
};

const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMPARE_PRODUCT:
      if (state.compareProducts[action.payload.id]) {
        return { ...state };
      } else {
        return {
          ...state,
          compareProducts: {
            ...state.compareProducts,
            [action.payload.product.id]: {
              ...action.payload,
            },
          },
        };
      }

    case types.REMOVE_COMPARE_PRODUCT:
      return {
        ...state,
        compareProducts: Object.values(state.compareProducts).filter(
          ({ product }) => product.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
};

export default compareReducer;
