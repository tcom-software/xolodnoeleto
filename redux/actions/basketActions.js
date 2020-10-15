export const BASKET_INITIAL_STATE = "BASKET_INITIAL_STATE";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CHANGE_ORDER_STATE = "CHANGE_ORDER_STATE";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_BASKET = "ADD_BASKET";

export const addBasket = (id) => ({
  type: ADD_BASKET,
  payload: id,
});

export const incrementBasketCount = (id) => ({
  type: INCREMENT,
  payload: { id },
});

export const decrementBasketCount = (id) => ({
  type: DECREMENT,
  payload: { id },
});

export const deleteBasketItem = (id) => ({
  type: DELETE_ITEM,
  payload: { id },
});

export const basketInitialState = () => ({
  type: BASKET_INITIAL_STATE,
});

export const changeOrderStep = (step) => ({
  type: CHANGE_ORDER_STATE,
  payload: step,
});
