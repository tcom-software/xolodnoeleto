export const INITIAL_STATE = "INITIAL_STATE";
export const IS_MOBILE = "IS_MOBILE";

export const setIsMobile = (isMobile) => ({
  type: IS_MOBILE,
  payload: isMobile,
});
