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
          const { folder, file_name, file_format } = data.photos
            .filter((e) => e.cover_photo === 1)
            .reduce((acc, next) => next, {});

          let img = {
            cover_photo: JSON.stringify([{}]),
            product_picture_folder: null,
            product_picture_format: null,
            product_picture_file_name: null,
          };

          if (folder === "products0") {
            img = {
              ...img,
              product_picture_folder: folder,
              product_picture_format: file_name,
              product_picture_file_name: file_format,
            };
          }

          if (folder === "product_series0") {
            img = {
              ...img,
              cover_photo: JSON.stringify([
                {
                  cover_photo: 1,
                  series_picture_folder: folder,
                  series_picture_format: file_format,
                  series_picture_file_name: file_name,
                },
              ]),
            };
          }

          dispatch(
            addSeenProduct({
              ...data.product,
              id: data.product.articule,
              ...img,
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
