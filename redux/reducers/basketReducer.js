import * as types from "../actions/basketActions";

const initialState = {
  items: {
    45: {
      id: 45,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7380",
      price: 27129,
      count: 5,
      selectedStarsCount: 4,
    },
    23: {
      id: 23,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 7644,
      count: 3,
      selectedStarsCount: 3,
    },
    24: {
      id: 24,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 1000,
      count: 3,
      selectedStarsCount: 3,
    },
    25: {
      id: 25,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 1000,
      count: 3,
      selectedStarsCount: 3,
    },
    26: {
      id: 26,
      src: "/test-product.png",
      manufacturer: "Dahatsu",
      model: "COMFORT-ON-OFF-2019-DG-07",
      vendorCode: "Артикул  | 7480",
      price: 1000,
      count: 3,
      selectedStarsCount: 3,
    },
  },
  total_amount: 0,
  stepState: 1,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BASKET_INITIAL_STATE:
      return {
        ...state,
        total_amount: Object.values(state.items)
          .map((e) => e.price * e.count)
          .reduce((acc, next) => acc + next, 0),
      };
    case types.INCREMENT:
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
    case types.DECREMENT:
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
    case types.DELETE_ITEM:
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

export default basketReducer;
