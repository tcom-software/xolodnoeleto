export const INCREMENT_PRODUCT = "INCREMENT_PRODUCT";
export const DECREMENT_PRODUCT = "DECREMENT_PRODUCT";

export const incrementProductCount = () => ({
  type: INCREMENT_PRODUCT,
});

export const decrementProductCount = () => ({
  type: DECREMENT_PRODUCT,
});
