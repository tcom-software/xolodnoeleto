export const LANDING_PAGE = "INITIAL_PAGE";
export const BRANDS_WITH_PAGE = "BRANDS_WITH_PAGE";

import getConfig from "next/config";
import { axiosInstance } from "../../utils";

const {
  publicRuntimeConfig: { getBrands: getBrandsUrl },
} = getConfig();

const getBrands = () => {
  return (dispatch) => {
    axiosInstance
      .get(getBrandsUrl)
      .then(({ data }) => {
        dispatch({
          type: LANDING_PAGE,
          payload: data,
        });
      })
      .catch(console.log);
  };
};

const getBrandsWithPage = (page, letters) => {
  return (dispatch) => {
    let string = "";

    if (page) {
      string += `?page=${page}`;
    }

    if (letters) {
      string += `&searchBrand=${letters.join().toLowerCase()}`;
    }

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

export { getBrands, getBrandsWithPage };
