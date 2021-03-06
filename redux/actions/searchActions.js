export const SEARCH = "SEARCH";
export const LOADING = "LOADING";
export const NEW_SEARCH = "NEW_SEARCH";
export const NEW_LOADING = "NEW_LOADING";
export const WHERE_WAS_SEARCH = "WHERE_WAS_SEARCH";
export const MAKE_EMPTY_SEARCH = "MAKE_EMPTY_SEARCH";
export const LAST_SEARCHED_WORD = "LAST_SEARCHED_WORD";
export const SET_SEARCH_INPUT_VALUE = "SET_SEARCH_INPUT_VALUE";
export const SET_NEW_REF_FOR_SEARCH = "SET_NEW_REF_FOR_SEARCH";
export const SELECTED_SEARCH_CATALOG = "SELECTED_SEARCH_CATALOG";
export const SET_RESERVED_CATALOG_LIST_DATA = "SET_RESERVED_CATALOG_LIST_DATA";

import { GET_CATALOG_PRODUCTS } from "../actions/catalogActions";

import getConfig from "next/config";
import axiosInstance from "../../utils/axiosInstance";
import { getBrands } from "./brandsActions";

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

export const actionSearch = ({
  searchWord,
  page = 1,
  selectedSearchCatalog,
  filters = {},
  updateCatalogCollection,
}) => {
  return (dispatch) => {
    if (typeof searchWord === "string" && searchWord != "") {
      if (page === 1) {
        dispatch(searchLoading(true));
      } else {
        dispatch(searchNewLoading(true));
      }
      dispatch(setLastSearchedWord(searchWord));

      const obj = { search: searchWord, page };
      if (selectedSearchCatalog)
        obj.categoryId = selectedSearchCatalog.split(`,`).map((x) => +x);

      axiosInstance
        .post(`${searchProduct}?page=${page}`, { ...obj, ...filters })
        .then(({ data }) => {
          if (data) {
            if (selectedSearchCatalog && updateCatalogCollection) {
              dispatch(getBrands(true));
              dispatch({
                type: GET_CATALOG_PRODUCTS,
                payload: data,
              });
            }

            if (searchWord) {
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
        .catch(console.log);
    } else {
      dispatch(makeEmptySearch());
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

export const setSelectedSearchCatalog = (object) => ({
  type: SELECTED_SEARCH_CATALOG,
  payload: object,
});

export const setLastSearchedWord = (word) => ({
  type: LAST_SEARCHED_WORD,
  payload: word,
});

export const makeEmptySearch = () => ({
  type: MAKE_EMPTY_SEARCH,
  payload: {
    type: SEARCH,
    payload: {
      products: [],
      products_info: { total: 0 },
    },
  },
});

export const setReservedCatalogListData = (data) => ({
  type: SET_RESERVED_CATALOG_LIST_DATA,
  reservedCatalogListInfo: data,
});
