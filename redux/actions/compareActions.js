export const INITIAL_STATE = "INITIAL_STATE";
export const ADD_COMPARE_PRODUCT = "ADD_COMPARE_PRODUCT";
export const REMOVE_COMPARE_PRODUCT = "REMOVE_COMPARE_PRODUCT";

export const addCompareProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_COMPARE_PRODUCT,
      payload: {
        id: Math.floor(Math.random() * 99),
        src: "/test-product.png",
        title: "Dahatsu COMFORT-ON-OFF-2019-DG-07",
        vendorCode: "Артикул  | 7450",
        price: 22240,
        selectedStarsCount: 4,
      },
    });
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
