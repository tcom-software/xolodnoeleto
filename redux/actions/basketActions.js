export const BASKET_INITIAL_STATE = "BASKET_INITIAL_STATE";
export const INCREMENT_BASKET = "INCREMENT_BASKET";
export const DECREMENT_BASKET = "DECREMENT_BASKET";
export const CHANGE_ORDER_STATE = "CHANGE_ORDER_STATE";
export const DELETE_BASKET_ITEM = "DELETE_BASKET_ITEM";
export const ADD_BASKET = "ADD_BASKET";
export const UPDATE_STEPS_RESULT = "UPDATE_STEPS_RESULT";
export const INITIAL_STEPS_RESULT = "INITIAL_STEPS_RESULT";
export const ADD_IN_TO_BASKET_FROM_FAVORITES =
  "ADD_IN_TO_BASKET_FROM_FAVORITES";

export const addBasketFromFavorite = (item) => ({
  type: ADD_IN_TO_BASKET_FROM_FAVORITES,
  payload: item,
});

export const addBasket = (id) => ({
  type: ADD_BASKET,
  payload: id,
});

export const incrementBasketCount = (id) => ({
  type: INCREMENT_BASKET,
  payload: { id },
});

export const makeInitialStepsResult = () => ({
  type: INITIAL_STEPS_RESULT,
});

export const updateStepsResult = (stepData) => ({
  type: UPDATE_STEPS_RESULT,
  payload: stepData,
});

export const decrementBasketCount = (id) => ({
  type: DECREMENT_BASKET,
  payload: { id },
});

export const deleteBasketItem = (id) => ({
  type: DELETE_BASKET_ITEM,
  payload: { id },
});

export const basketInitialState = () => ({
  type: BASKET_INITIAL_STATE,
});

export const changeOrderStep = (step) => ({
  type: CHANGE_ORDER_STATE,
  payload: step,
});
