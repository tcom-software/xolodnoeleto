export const INITIAL_STATE = "INITIAL_STATE";
export const ADD_COMPARE_PRODUCT = "ADD_COMPARE_PRODUCT";
export const REMOVE_COMPARE_PRODUCT = "REMOVE_COMPARE_PRODUCT";
import getConfig from "next/config";
import { axiosInstance } from "@utils";

const {
  publicRuntimeConfig: { getProduct },
} = getConfig();

export const addCompareProduct = (id) => {
  return (dispatch) => {
    axiosInstance
      .get(`${getProduct}/${id}`)
      .then(({ data }) => {
        if (data) {
          dispatch({
            type: ADD_COMPARE_PRODUCT,
            payload: {
              product: data.product,
              photo: data.photos
                .map((e) => (e.cover_photo === 1 ? e : null))
                .filter((e) => e != undefined)[0],
              characteristics: data.characteristics,
            },
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const removeCompareProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_COMPARE_PRODUCT,
      payload: id,
    });
  };
};
