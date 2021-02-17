export const LOADING = "LOADING";
export const NEW_LOADING = "NEW_LOADING";
export const SEARCH = "SEARCH";
export const NEW_SEARCH = "NEW_SEARCH";
export const WHERE_WAS_SEARCH = "WHERE_WAS_SEARCH";
export const SET_REF_FOR_SEARCH = "SET_REF_FOR_SEARCH";
export const SET_SEARCH_INPUT_VALUE = "SET_SEARCH_INPUT_VALUE";
export const SET_NEW_REF_FOR_SEARCH = "SET_NEW_REF_FOR_SEARCH";

import getConfig from "next/config";
import axiosInstance from "../../utils/axiosInstance";

const {
  publicRuntimeConfig: { searchProduct },
} = getConfig();

export const searchLoading = (boolean) => ({
  type: LOADING,
  payload: boolean,
});

export const searchNewLoading = (boolean) => ({
  type: NEW_LOADING,
  payload: boolean,
});

export const actionSearch = (searchWord, page = 1, catalogId = null) => {
  return (dispatch) => {
    if (searchWord === "") {
      dispatch({
        type: SEARCH,
        payload: {
          searchResponse: [],
          total: 1,
        },
      });
    } else {
      if(page === 1) {
        dispatch(searchLoading(true))
      } else {
        dispatch(searchNewLoading(true))
      }
      let catalogIdStr = ""
      if(catalogId != null) {
        catalogIdStr = '/' + catalogId;
      }

      axiosInstance
          .post(`${searchProduct}${catalogIdStr}?page=${page}`, { search: searchWord, page })
          .then(({ data }) => {
            if (data) {
              if(page === 1) {
                dispatch({
                  type: SEARCH,
                  payload: data,
                })
              } else {
                dispatch({
                  type: NEW_SEARCH,
                  payload: data,
                })
              }
            }
          })
          .catch((err) => console.log(err));
    }
  };
};

export const whereWasSearchAction = (where) => ({
  type: WHERE_WAS_SEARCH,
  payload: where,
});

export const searchInputValueAction = (value) => ({
  type: SET_SEARCH_INPUT_VALUE,
  payload: value,
});

export const setNewRefForSearch = (ref) => ({
  type: SET_NEW_REF_FOR_SEARCH,
  payload: ref,
});
