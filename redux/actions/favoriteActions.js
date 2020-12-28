export const INCREMENT_FAVORITE = "INCREMENT_FAVORITE";
export const DECREMENT_FAVORITE = "DECREMENT_FAVORITE";
export const DELETE_ITEM_FAVORITE = "DELETE_ITEM_FAVORITE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";

export const incrementFavoriteCount = (id) => ({
  type: INCREMENT_FAVORITE,
  payload: id,
});

export const decrementFavoriteCount = (id) => ({
  type: DECREMENT_FAVORITE,
  payload: id,
});

export const addToFavorite = (product) => ({
  type: ADD_TO_FAVORITE,
  payload: product,
});
export const deleteFavoriteItem = (id) => ({
  type: DELETE_ITEM_FAVORITE,
  payload: id,
});
