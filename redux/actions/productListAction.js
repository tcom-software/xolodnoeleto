export const SEEN_PRODUCTS = "SEEN_PRODUCTS";

export const addSeenProduct = (product) => ({
  type: SEEN_PRODUCTS,
  payload: product,
});
