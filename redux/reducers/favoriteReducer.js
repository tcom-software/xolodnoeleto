import * as types from "../actions/favoriteActions";

const initialState = {
  items: {},
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITE:
      const addAdsId = action.payload.id;
      if (state.items[addAdsId]) {
        return {
          ...state,
          items: {
            ...state.items,
            [addAdsId]: {
              ...state.items[addAdsId],
              id: addAdsId,
              count: state.items[addAdsId].count + 1,
            },
          },
        };
      } else {
        return {
          ...state,
          items: {
            [addAdsId]: {
              ...action.payload,
              id: addAdsId,
              count: 1,
            },
          },
        };
      }
    case types.INCREMENT_FAVORITE:
      const incAdsId = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [incAdsId]: {
            ...state.items[incAdsId],
            count: state.items[incAdsId].count + 1,
          },
        },
        total_amount: state.total_amount + state.items[incAdsId].price,
      };
    case types.DECREMENT_FAVORITE:
      const decAdsId = action.payload;
      if (state.items[decAdsId].count === 1) {
        return { ...state };
      }
      return {
        ...state,
        items: {
          ...state.items,
          [decAdsId]: {
            ...state.items[decAdsId],
            count: state.items[decAdsId].count - 1,
          },
        },
        total_amount: state.total_amount - state.items[decAdsId].price,
      };
    case types.DELETE_ITEM_FAVORITE:
      const delFavId = action.payload;
      return {
        ...state,
        items: {
          ...Object.values(state.items)
            .filter(({ id }) => id != delFavId)
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
          state.items[delFavId].price * state.items[delFavId].count,
      };
    default:
      return { ...state };
  }
};

export default favoriteReducer;
