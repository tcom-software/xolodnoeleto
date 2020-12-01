import getConfig from "next/config";

export const GET_PRODUCT = "GET_PRODUCT";
export const INCREMENT_PRODUCT = "INCREMENT_PRODUCT";
export const DECREMENT_PRODUCT = "DECREMENT_PRODUCT";

import axiosInstance from "utils/axiosInstance";
const {
  publicRuntimeConfig: { getProduct },
} = getConfig();

export const getProductInfo = (id) => {
  return (dispatch) => {
    axiosInstance
      .get(`${getProduct}/${id}`)
      .then(({ data }) => {
        if (data) {
          dispatch({
            type: GET_PRODUCT,
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
export const incrementProductCount = () => ({
  type: INCREMENT_PRODUCT,
});

export const decrementProductCount = () => ({
  type: DECREMENT_PRODUCT,
});
