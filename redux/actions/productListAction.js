import { axiosInstance } from "@utils";

export const NEW_PRODUCTS = "NEW_PRODUCTS";
export const SEEN_PRODUCTS = "SEEN_PRODUCTS";
import getConfig from "next/config";

export const addSeenProduct = (product) => ({
  type: SEEN_PRODUCTS,
  payload: product,
});

export const newProducts = () => {
  return (dispatch) => {
    const {
      publicRuntimeConfig: { getNewProducts },
    } = getConfig();
    axiosInstance
      .get(getNewProducts)
      .then(({ data }) => {
        if (data) {
          return dispatch({
            type: NEW_PRODUCTS,
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
