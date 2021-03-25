export const LANDING_PAGE = "INITIAL_PAGE";
export const BRAND_PRODUCTS = "BRAND_PRODUCTS";
export const BRANDS_WITH_PAGE = "BRANDS_WITH_PAGE";
export const GET_CATALOG_PRODUCTS = "GET_CATALOG_PRODUCTS";
import { GET_CATALOG_FILTERS } from "./catalogActions";

import getConfig from "next/config";
import { axiosInstance, makeFilters } from "../../utils";

const {
  publicRuntimeConfig: { getBrands: getBrandsUrl, catalogProducts },
} = getConfig();

const getBrands = (all = false) => {
  return (dispatch) => {
    axiosInstance
      .post(getBrandsUrl, JSON.stringify(all ? { all: true } : {}))
      .then(({ data }) => {
        if (all) {
          const { brands } = data;
          const filters = {
            characteristicAttributes: [],
            textFilters: [],
            manufacturerCountries: brands,
          };
          dispatch({
            type: GET_CATALOG_FILTERS,
            payload: makeFilters(filters),
          });
        } else {
          dispatch({
            type: LANDING_PAGE,
            payload: data,
          });
        }
      })
      .catch(console.log);
  };
};

const getBrandProducts = (page = 1, brandId, object = {}) => {
  return (dispatch) => {
    axiosInstance
      .post(
        `${catalogProducts}`,
        JSON.stringify({ manufacturerCountries: [brandId], page, ...object })
      )
      .then(({ data }) => {
        dispatch({
          type: GET_CATALOG_PRODUCTS,
          payload: data,
        });
      })
      .catch(console.log);
  };
};

const getBrandsWithPage = (page, letters) => {
  return (dispatch) => {
    let string = "";
    if (page) string += `?page=${page}`;
    if (letters) string += `&searchBrand=${letters.join().toLowerCase()}`;

    axiosInstance
      .get(getBrandsUrl + string)
      .then(({ data }) => {
        dispatch({
          type: BRANDS_WITH_PAGE,
          payload: data,
        });
      })
      .catch(console.log);
  };
};

export { getBrands, getBrandsWithPage, getBrandProducts };
