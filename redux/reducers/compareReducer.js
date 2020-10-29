import * as types from "../actions/compareActions";

const initialState = {
  compareProducts: {
    2525: {
      id: 2525,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7380",
      count: 1,
      price: 22240,
      selectedStarsCount: 4,
    },
  },
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
            [action.payload.id]: {
              ...action.payload,
            },
          },
        };
      }

    case types.REMOVE_COMPARE_PRODUCT:
      return {
        ...state,
        compareProducts: Object.values(state.compareProducts)
          .filter((e) => e.id !== action.payload)
          .reduce((acc, next) => {
            return {
              ...acc,
              [next.id]: {
                ...next,
              },
            };
          }, {}),
      };
    default:
      return { ...state };
  }
};

export default compareReducer;
