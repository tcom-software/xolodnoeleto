export const LOADING = "LOADING";
export const NEW_LOADING = "NEW_LOADING";
export const SEARCH = "SEARCH";
export const NEW_SEARCH = "NEW_SEARCH";
export const WHERE_WAS_SEARCH = "WHERE_WAS_SEARCH";
export const SET_SEARCH_INPUT_VALUE = "SET_SEARCH_INPUT_VALUE";

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

export const actionSearch = (searchWord, page = 1) => {
  return (dispatch) => {
    if (searchWord === "") {
      dispatch({
        type: SEARCH,
        payload: {
          searchResponse: [],
          total: 1,
        },
      });
      return false;
    }
    {
      page === 1
        ? dispatch(searchLoading(true))
        : dispatch(searchNewLoading(true));
    }

    axiosInstance
      .post(`${searchProduct}?page=${page}`, { search: searchWord, page })
      .then(({ data }) => {
        if (data) {
          {
            page === 1
              ? dispatch({
                  type: SEARCH,
                  payload: data,
                })
              : dispatch({
                  type: NEW_SEARCH,
                  payload: data,
                });
          }
        }
      })
      .catch((err) => console.log(err));
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
