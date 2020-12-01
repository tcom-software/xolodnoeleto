export const CATALOG_LIST = "CATALOG_LIST";
export const GET_CATALOGUE_FILTERS = "GET_CATALOGUE_FILTERS";
export const GET_CATALOGUE_PRODUCTS = "GET_CATALOGUE_PRODUCTS";
export const CATALOGUE_LOADING_TRIGGER = "CATALOGUE_LOADING_TRIGGER";
export const OPEN_FILTERS_TOGGLE = "OPEN_FILTERS_TOGGLE";
export const FIRST_SECOND_LEVEL_ARRAY = "FIRST_SECOND_LEVEL_ARRAY";
export const FIRST_FILTERS_LEVEL_ARRAY = "FIRST_FILTERS_LEVEL_ARRAY";

import axiosInstance from "utils/axiosInstance";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { catalogueProducts, catalogueCategories, getFilters },
} = getConfig();

export const getCatalogueProductLoadingTrigger = (boolean) => ({
  type: CATALOGUE_LOADING_TRIGGER,
  payload: boolean,
});

export const getCatalogueProducts = (type, page = 1) => {
  return (dispatch) => {
    dispatch(getCatalogueProductLoadingTrigger(true));
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

export const getCatalogueFilters = (catalogueId) => {
  return (dispatch) => {
    axiosInstance
      .get(`${getFilters}/${catalogueId}`)
      .then(({ data }) => {
        if (data) {
          const { characteristicAttributes } = data;
          const sortedFilters = characteristicAttributes.reduce(
            (acc, next, i) => {
              const { title } = next;
              if (title === null) {
                return { ...acc };
              }

              return {
                ...acc,
                [title]: acc[title]
                  ? acc[title].concat([{ ...next }])
                  : [{ ...next }],
              };
            },
            {}
          );
          dispatch({
            type: GET_CATALOGUE_FILTERS,
            payload: sortedFilters,
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

export const actionSecondFiltersLevelArray = (filter) => {
  return {
    type: FIRST_SECOND_LEVEL_ARRAY,
    payload: filter,
  };
};

export const actionFirstFiltersLevelArray = (filter) => {
  return {
    type: FIRST_FILTERS_LEVEL_ARRAY,
    payload: filter,
  };
};

export const filtersToggle = () => {
  return {
    type: OPEN_FILTERS_TOGGLE,
  };
};
