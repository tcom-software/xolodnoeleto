export const IS_MOBILE = "IS_MOBILE";
export const CATALOG_LIST = "CATALOG_LIST";
export const INITIAL_STATE = "INITIAL_STATE";
export const IS_OPEN_BIG_IMAGE = "IS_OPEN_BIG_IMAGE";

import axiosInstance from "utils/axiosInstance";

export const loadCatalogList = (list) => {
  return (dispatch) => {
    axiosInstance
      .get("/api/getCategories")
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

export const changeBigImage = (src) => ({
  type: IS_OPEN_BIG_IMAGE,
  payload: src,
});

export const setIsMobile = (isMobile) => ({
  type: IS_MOBILE,
  payload: isMobile,
});
