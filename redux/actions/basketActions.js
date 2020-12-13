import getConfig from "next/config";

export const BASKET_INITIAL_STATE = "BASKET_INITIAL_STATE";
export const INCREMENT_BASKET = "INCREMENT_BASKET";
export const DECREMENT_BASKET = "DECREMENT_BASKET";
export const CHANGE_ORDER_STATE = "CHANGE_ORDER_STATE";
export const DELETE_BASKET_ITEM = "DELETE_BASKET_ITEM";
export const ADD_BASKET = "ADD_BASKET";
export const MAKE_ORDER = "MAKE_ORDER";
export const BASKET_LOADING = "BASKET_LOADING";
export const UPDATE_STEPS_RESULT = "UPDATE_STEPS_RESULT";
export const INITIAL_STEPS_RESULT = "INITIAL_STEPS_RESULT";
export const SELECTED_DATA_MANIPULATION = "SELECTED_DATA_MANIPULATION";
import axiosInstance from "../../utils/axiosInstance";

const {
  publicRuntimeConfig: { makeOrder },
} = getConfig();

export const loading = () => ({
  type: BASKET_LOADING,
});

export const addBasket = (product) => ({
  type: ADD_BASKET,
  payload: product,
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

export const manipulationSelectedData = (data) => ({
  type: SELECTED_DATA_MANIPULATION,
  payload: data,
});

export const actionMakeOrder = (info) => {
  return (dispatch) => {
    dispatch(loading());
    axiosInstance
      .post(`${makeOrder}`, JSON.stringify({ ...info }))
      .then(({ data }) => {
        if (data) {
          if (data === "success") {
            dispatch({
              type: MAKE_ORDER,
            });
            dispatch(loading());
          }
        }
      })
      .catch((err) => console.log(err));
  };
};
