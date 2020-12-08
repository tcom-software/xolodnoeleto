export const SEARCHING = "SEARCHING";
export const SEARCH_LOADING = "SEARCH_LOADING";

import getConfig from "next/config";
import axiosInstance from "../../utils/axiosInstance";

const {
  publicRuntimeConfig: { searchProduct },
} = getConfig();

export const searchLoading = (boolean) => ({
  type: SEARCH_LOADING,
  payload: boolean,
});

export const actionSearch = (searchWord) => {
  return (dispatch) => {
    dispatch(searchLoading(true));
    if (searchWord === "") {
      dispatch({
        type: SEARCHING,
        payload: [],
      });
    } else {
      axiosInstance
        .post(`${searchProduct}`, { search: searchWord })
        .then(({ data }) => {
          if (data) {
            dispatch({
              type: SEARCHING,
              payload: data,
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };
};
