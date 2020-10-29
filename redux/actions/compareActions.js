export const INITIAL_STATE = "INITIAL_STATE";
export const ADD_COMPARE_PRODUCT = "ADD_COMPARE_PRODUCT";
export const REMOVE_COMPARE_PRODUCT = "REMOVE_COMPARE_PRODUCT";

export const addCompareProduct = (object = null) => {
  return (dispatch) => {
    const product =
      object === null
        ? {
            id: Math.floor(Math.random() * 5000),
            src: "/test-product.png",
            manufacturer: "COMFORT-ON-OFF-2019-DG-07",
            model: "Dahatsu",
            vendorCode: "Артикул  | 7450",
            price: 22240,
            selectedStarsCount: 4,
          }
        : object;

    dispatch({
      type: ADD_COMPARE_PRODUCT,
      payload: { ...product },
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
