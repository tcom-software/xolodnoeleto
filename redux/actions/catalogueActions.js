export const CATALOG_LIST = "CATALOG_LIST";
export const OPEN_FILTERS_TOGGLE = "OPEN_FILTERS_TOGGLE";
export const GET_CATALOGUE_FILTERS = "GET_CATALOGUE_FILTERS";
export const GET_CATALOGUE_PRODUCTS = "GET_CATALOGUE_PRODUCTS";
export const MANIPULATION_RADIO_DATA = "MANIPULATION_RADIO_DATA";
export const FIRST_SECOND_LEVEL_ARRAY = "FIRST_SECOND_LEVEL_ARRAY";
export const CATALOGUE_LOADING_TRIGGER = "CATALOGUE_LOADING_TRIGGER";
export const FIRST_FILTERS_LEVEL_ARRAY = "FIRST_FILTERS_LEVEL_ARRAY";
export const MANIPULATION_BETWEEN_DATA = "MANIPULATION_BETWEEN_DATA";
export const MANIPULATION_MULTIPLE_DATA = "MANIPULATION_MULTIPLE_DATA";
export const UPDATE_SELECTED_DATA_FROM_URL = "UPDATE_SELECTED_DATA_FROM_URL";

import axiosInstance from "utils/axiosInstance";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { catalogueProducts, catalogueCategories, getFilters },
} = getConfig();

export const getCatalogueProductLoadingTrigger = (boolean) => ({
  type: CATALOGUE_LOADING_TRIGGER,
  payload: boolean,
});

export const getCatalogueProducts = (catalogueId, object = {}) => {
  return (dispatch) => {
    dispatch(getCatalogueProductLoadingTrigger(true));
    /*
    * {
          page: 2,
          fromTo: {
            price: [0, 150000],
            1: [5, 7],
          },
          checkboxes: {
            3: [3],
            7: [12],
          },
        }*/
    axiosInstance
      .post(`${catalogueProducts}/${catalogueId}`, {
        body: JSON.stringify(object),
      })
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
          const { characteristicAttributes, textFilters } = data;
          const sortedFilters = [
            ...textFilters,
            ...characteristicAttributes,
          ].reduce((acc, next, i) => {
            if (next["name"] === undefined) {
              next["name"] = "file.fromTo";
            }

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
          }, {});

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
