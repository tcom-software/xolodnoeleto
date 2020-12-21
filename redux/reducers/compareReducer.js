import * as types from "../actions/compareActions";

const initialState = {
  compareProducts: {},
};

const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMPARE_PRODUCT:
      if (state.compareProducts[action.payload.product.articule]) {
        return { ...state };
      } else {
        return {
          ...state,
          compareProducts: {
            ...state.compareProducts,
            [action.payload.product.articule]: {
              ...action.payload,
            },
          },
        };
      }

    case types.REMOVE_COMPARE_PRODUCT:
      const newArray = Object.values(state.compareProducts)
        .filter(({ product }) => product.articule !== action.payload)
        .reduce((acc, next) => {
          return {
            ...acc,
            [next.product.articule]: next,
          };
        }, {});
      return {
        ...state,
        compareProducts: newArray,
      };
    default:
      return { ...state };
  }
};

export default compareReducer;
