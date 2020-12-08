export const SEARCHED = "SEARCHED";
export const IS_MOBILE = "IS_MOBILE";
export const CATALOG_LIST = "CATALOG_LIST";
export const INITIAL_STATE = "INITIAL_STATE";
export const IS_OPEN_BIG_IMAGE = "IS_OPEN_BIG_IMAGE";

export const changeBigImage = (src) => ({
  type: IS_OPEN_BIG_IMAGE,
  payload: src,
});

export const setIsMobile = (isMobile) => ({
  type: IS_MOBILE,
  payload: isMobile,
});
