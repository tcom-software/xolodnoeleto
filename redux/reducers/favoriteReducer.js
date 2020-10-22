import * as types from "../actions/favoriteActions";

const initialState = {
  items: {
    1: {
      id: 1,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7380",
      price: 27129,
      count: 5,
      selectedStarsCount: 4,
    },
    2: {
      id: 2,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 7644,
      count: 3,
      selectedStarsCount: 3,
    },
    3: {
      id: 3,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 1000,
      count: 3,
      selectedStarsCount: 3,
    },
    4: {
      id: 4,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 1000,
      count: 3,
      selectedStarsCount: 3,
    },
    5: {
      id: 5,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 1000,
      count: 3,
      selectedStarsCount: 3,
    },
  },
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_FAVORITE:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            count: state.items[action.payload.id].count + 1,
          },
        },
        total_amount: state.total_amount + state.items[action.payload.id].price,
      };
    case types.DECREMENT_FAVORITE:
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            ...state.items[action.payload.id],
            count:
              state.items[action.payload.id].count === 1
                ? 1
                : state.items[action.payload.id].count - 1,
          },
        },
        total_amount:
          state.items[action.payload.id].count === 1
            ? state.total_amount
            : state.total_amount - state.items[action.payload.id].price,
      };
    case types.DELETE_ITEM_FAVORITE:
      return {
        ...state,
        items: {
          ...Object.values(state.items)
            .filter((e) => e.id != action.payload.id)
            .reduce((acc, next) => {
              return {
                ...acc,
                [next.id]: {
                  ...next,
                },
              };
            }, {}),
        },
        total_amount:
          state.total_amount -
          state.items[action.payload.id].price *
            state.items[action.payload.id].count,
      };
    default:
      return { ...state };
  }
};

export default favoriteReducer;
