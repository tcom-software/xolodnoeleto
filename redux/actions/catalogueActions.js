export const CATALOGUE_LOADING_TRIGGER = "CATALOGUE_LOADING_TRIGGER";
export const GET_CATALOGUE_PRODUCTS = "GET_CATALOGUE_PRODUCTS";
export const CATALOG_LIST = "CATALOG_LIST";

import axiosInstance from "utils/axiosInstance";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { catalogueProducts, catalogueCategories },
} = getConfig();

export const getCatalogueProductLoadingTrigger = (boolean) => ({
  type: CATALOGUE_LOADING_TRIGGER,
  payload: boolean,
});

export const getCatalogueProducts = (type, page = 1) => {
  return (dispatch) => {
    dispatch(getCatalogueProductLoadingTrigger(true));
    console.log(`${catalogueProducts}/${type}?page=${page}`);
    axiosInstance
      .get(`${catalogueProducts}/${type}?page=${page}`)
      .then(({ data }) => {
        if (data) {
          dispatch({
            type: GET_CATALOGUE_PRODUCTS,
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const loadCatalogList = () => {
  return (dispatch) => {
    axiosInstance
      .get(catalogueCategories)
      .then(({ data }) => {
        if (data.length > 0) {
          dispatch({
            type: CATALOG_LIST,
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
