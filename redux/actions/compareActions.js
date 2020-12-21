export const INITIAL_STATE = "INITIAL_STATE";
export const ADD_COMPARE_PRODUCT = "ADD_COMPARE_PRODUCT";
export const REMOVE_COMPARE_PRODUCT = "REMOVE_COMPARE_PRODUCT";

export const addCompareProduct = (id) => {
  return (dispatch) => {
    console.log(id, "---------addCompareProduct");

    // dispatch({
    //   type: ADD_COMPARE_PRODUCT,
    //   payload: {  },
    // });
  };
};

export const removeCompareProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_COMPARE_PRODUCT,
      payload: id,
    });
  };
};
