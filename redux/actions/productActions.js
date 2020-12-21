import getConfig from "next/config";

export const GET_PRODUCT = "GET_PRODUCT";
export const INCREMENT_PRODUCT = "INCREMENT_PRODUCT";
export const DECREMENT_PRODUCT = "DECREMENT_PRODUCT";
export const CLEAR_PRODUCT_INFO = "CLEAR_PRODUCT_INFO";

import axiosInstance from "utils/axiosInstance";
import { addSeenProduct } from "./productListAction";
const {
  publicRuntimeConfig: { getProduct },
} = getConfig();

export const getProductInfo = (id) => {
  return (dispatch) => {
    axiosInstance
      .get(`${getProduct}/${id}`)
      .then(({ data }) => {
        if (data) {
          const imgObj = data.photos
            .filter((e) => e.cover_photo === 1)
            .reduce((acc, next) => next, {});

          dispatch(
            addSeenProduct({
              ...data.product,
              id: data.product.articule,
              series_picture_folder: imgObj.folder,
              series_picture_file_name: imgObj.file_name,
              series_picture_format: imgObj.file_format,
              product_picture_folder: imgObj.folder,
              product_picture_file_name: imgObj.file_name,
              product_picture_format: imgObj.file_format,
            })
          );
          dispatch({
            type: GET_PRODUCT,
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const clearProductInfo = () => ({
  type: CLEAR_PRODUCT_INFO,
});

export const incrementProductCount = () => ({
  type: INCREMENT_PRODUCT,
});

export const decrementProductCount = () => ({
  type: DECREMENT_PRODUCT,
});
