import * as types from "../actions/productActions";

const initialState = {
  productInfo: {},
  productLoading: true,
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT:
      action.payload.product.count = 1;
      return {
        ...state,
        productInfo: action.payload,
        productLoading: false,
      };
    case types.INCREMENT_PRODUCT:
      return {
        ...state,
        productInfo: {
          ...state.productInfo,
          product: {
            ...state.productInfo.product,
            count: state.productInfo.product.count + 1,
          },
        },
      };
    case types.DECREMENT_PRODUCT:
      return {
        ...state,
        productInfo: {
          ...state.productInfo,
          product: {
            ...state.productInfo.product,
            count:
              state.productInfo.product.count === 1
                ? 1
                : state.productInfo.product.count - 1,
          },
        },
      };

    default:
      return { ...state };
  }
};

export default favoriteReducer;
