import * as types from "../actions/compareActions";

const initialState = {
  compareProducts: {
    1: {
      id: 1,
      src: "/test-product.png",
      title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7380",
      price: 22240,
      selectedStarsCount: 4,
    },
    // 2: {
    //   id: 2,
    //   src: "/test-product.png",
    //   title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
    //   vendorCode: "Артикул  | 7480",
    //   price: 22240,
    //   selectedStarsCount: 3,
    // },
    // 3: {
    //   id: 3,
    //   src: "/test-product.png",
    //   title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
    //   vendorCode: "Артикул  | 7480",
    //   price: 22240,
    //   selectedStarsCount: 3,
    // },
  },
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMPARE_PRODUCT:
      return {
        ...state,
        compareProducts: {
          ...state.compareProducts,
          [action.payload.id]: {
            ...action.payload,
          },
        },
      };
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

export default brandsReducer;
