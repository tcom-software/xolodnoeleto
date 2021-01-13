import * as types from "../actions/favoriteActions";

const initialState = {
  favoriteProducts: {},
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_FAVORITE:
      const addAdsId = action.payload.id;
      if (state.favoriteProducts[addAdsId]) {
        return {
          ...state,
          favoriteProducts: {
            ...state.favoriteProducts,
            [addAdsId]: {
              ...state.favoriteProducts[addAdsId],
              id: addAdsId,
              count: state.favoriteProducts[addAdsId].count + 1,
            },
          },
        };
      } else {
        return {
          ...state,
          favoriteProducts: {
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
        favoriteProducts: {
          ...state.favoriteProducts,
          [incAdsId]: {
            ...state.favoriteProducts[incAdsId],
            count: state.favoriteProducts[incAdsId].count + 1,
          },
        },
        total_amount:
          state.total_amount + state.favoriteProducts[incAdsId].price,
      };
    case types.DECREMENT_FAVORITE:
      const decAdsId = action.payload;
      if (state.favoriteProducts[decAdsId].count === 1) {
        return { ...state };
      }
      return {
        ...state,
        favoriteProducts: {
          ...state.favoriteProducts,
          [decAdsId]: {
            ...state.favoriteProducts[decAdsId],
            count: state.favoriteProducts[decAdsId].count - 1,
          },
        },
        total_amount:
          state.total_amount - state.favoriteProducts[decAdsId].price,
      };
    case types.DELETE_ITEM_FAVORITE:
      const delFavId = action.payload;
      return {
        ...state,
        favoriteProducts: {
          ...Object.values(state.favoriteProducts)
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
          state.favoriteProducts[delFavId].price *
            state.favoriteProducts[delFavId].count,
      };
    default:
      return { ...state };
  }
};

export default favoriteReducer;
