import * as types from "../actions/favoriteActions";

const initialState = {
  items: {},
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
    case types.ADD_TO_FAVORITE:
      if (state.items[action.payload.id]) {
        return { ...state };
      } else {
        return {
          ...state,
          items: {
            [action.payload.id]: {
              ...action.payload,
            },
          },
        };
      }
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
