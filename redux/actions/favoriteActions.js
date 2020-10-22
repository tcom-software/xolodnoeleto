export const FAVORITE_INITIAL_STATE = "FAVORITE_INITIAL_STATE";
export const INCREMENT_FAVORITE = "INCREMENT_FAVORITE";
export const DECREMENT_FAVORITE = "DECREMENT_FAVORITE";
export const DELETE_ITEM_FAVORITE = "DELETE_ITEM_FAVORITE";

export const favoriteInitialState = () => ({
  type: FAVORITE_INITIAL_STATE,
});

export const incrementFavoriteCount = (id) => ({
  type: INCREMENT_FAVORITE,
  payload: { id },
});

export const decrementFavoriteCount = (id) => ({
  type: DECREMENT_FAVORITE,
  payload: { id },
});

export const deleteFavoriteItem = (id) => ({
  type: DELETE_ITEM_FAVORITE,
  payload: { id },
});
