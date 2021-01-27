export const INITIAL_STATE = "INITIAL_STATE";

import getConfig from "next/config";
import { axiosInstance } from "../../utils";

const {
  publicRuntimeConfig: { getBrands },
} = getConfig();

const getBrandsForInitialPage = () => {
  return (dispatch) => {
    axiosInstance
      .get(getBrands)
      .then(({ data }) => {
        data.length = 20;
        dispatch({
          type: INITIAL_STATE,
          payload: data,
        });
      })
      .catch(console.log);
  };
};

export { getBrandsForInitialPage };
