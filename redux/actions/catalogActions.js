export const CATALOG_LIST = "CATALOG_LIST";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const OPEN_FILTERS_TOGGLE = "OPEN_FILTERS_TOGGLE";
export const GET_CATALOG_FILTERS = "GET_CATALOG_FILTERS";
export const GET_CATALOG_PRODUCTS = "GET_CATALOG_PRODUCTS";
export const CATALOG_LOADING_TRIGGER = "CATALOG_LOADING_TRIGGER";
export const MANIPULATION_RADIO_DATA = "MANIPULATION_RADIO_DATA";
export const UPDATE_SELECTED_ORDER_BY = "UPDATE_SELECTED_ORDER_BY";
export const FIRST_SECOND_LEVEL_ARRAY = "FIRST_SECOND_LEVEL_ARRAY";
export const UPDATE_SELECTED_DATA_PAGE = "UPDATE_SELECTED_DATA_PAGE";
export const FIRST_FILTERS_LEVEL_ARRAY = "FIRST_FILTERS_LEVEL_ARRAY";
export const MANIPULATION_BETWEEN_DATA = "MANIPULATION_BETWEEN_DATA";
export const MANIPULATION_MULTIPLE_DATA = "MANIPULATION_MULTIPLE_DATA";
export const CLEAR_SELECTED_FILTERS_DATA = "CLEAR_SELECTED_FILTERS_DATA";
export const CHANGE_MOBILE_FILTERS_STATUS = "CHANGE_MOBILE_FILTERS_STATUS";
export const UPDATE_SELECTED_DATA_FROM_URL = "UPDATE_SELECTED_DATA_FROM_URL";

import { axiosInstance, makeFilters } from "@utils";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { catalogProducts, catalogCategories },
} = getConfig();

export const getCatalogProductLoadingTrigger = (boolean) => ({
  type: CATALOG_LOADING_TRIGGER,
  payload: boolean,
});

export const getCatalogProductsWithoutAxios = ({
  products,
  products_info,
}) => ({
  type: GET_CATALOG_PRODUCTS,
  payload: { products, products_info },
});

export const getCatalogProducts = (catalogId, object = {}) => {
  return (dispatch) => {
    dispatch(getCatalogProductLoadingTrigger(true));
    axiosInstance
      .post(`${catalogProducts}/${catalogId}`, JSON.stringify({ ...object }))
      .then(({ data }) => {
        if (data) {
          const { filters, products, products_info } = data;

          dispatch({
            type: GET_CATALOG_PRODUCTS,
            payload: { products, products_info },
          });

          dispatch({
            type: GET_CATALOG_FILTERS,
            payload: makeFilters(filters),
          });
          
        }
      })
      .catch((err) => console.log(err));
  };
};

export const loadCatalogList = () => {
  return (dispatch) => {
    axiosInstance
      .get(catalogCategories)
      .then(({ data }) => {
        if (data) {
          dispatch({
            type: CATALOG_LIST,
            payload: data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const actionSecondFiltersLevelArray = (filter) => {
  return {
    type: FIRST_SECOND_LEVEL_ARRAY,
    payload: filter,
  };
};

export const actionFirstFiltersLevelArray = (filter) => ({
  type: FIRST_FILTERS_LEVEL_ARRAY,
  payload: filter,
});

export const filtersToggle = () => {
  return {
    type: OPEN_FILTERS_TOGGLE,
  };
};

export const actionManipulationMultiple = (data) => {
  return {
    type: MANIPULATION_MULTIPLE_DATA,
    payload: data,
  };
};

export const actionManipulationBetween = (data) => {
  return {
    type: MANIPULATION_BETWEEN_DATA,
    payload: data,
  };
};

export const actionManipulationRadio = (data) => {
  return {
    type: MANIPULATION_RADIO_DATA,
    payload: data,
  };
};

export const updateSelectedDataFromUrl = (data) => ({
  type: UPDATE_SELECTED_DATA_FROM_URL,
  payload: data,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

export const updateSelectedDataPage = (page) => ({
  type: UPDATE_SELECTED_DATA_PAGE,
  payload: page,
});

export const updateSelectedOrderBy = (type) => ({
  type: UPDATE_SELECTED_ORDER_BY,
  payload: type,
});

export const clearFiltersSelectedData = () => ({
  type: CLEAR_SELECTED_FILTERS_DATA,
});

export const changeMobileFiltersStatus = () => ({
  type: CHANGE_MOBILE_FILTERS_STATUS,
});
