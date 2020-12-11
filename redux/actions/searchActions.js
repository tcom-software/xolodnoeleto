export const LOADING = "LOADING";
export const NEW_LOADING = "NEW_LOADING";
export const SEARCH = "SEARCH";
export const NEW_SEARCH = "NEW_SEARCH";

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
