export const SEARCHED = "SEARCHED";
export const IS_MOBILE = "IS_MOBILE";
export const CATALOG_LIST = "CATALOG_LIST";
export const INITIAL_STATE = "INITIAL_STATE";
export const SHOW_ORU_PHONES = "SHOW_ORU_PHONES";
export const IS_OPEN_BIG_IMAGE = "IS_OPEN_BIG_IMAGE";
export const NOTIFICATION_MESSAGE = "NOTIFICATION_MESSAGE";
import { NotificationInterface } from "../../interfaces";

export const changeBigImage = (src) => ({
  type: IS_OPEN_BIG_IMAGE,
  payload: src,
});

export const setIsMobile = (isMobile) => ({
  type: IS_MOBILE,
  payload: isMobile,
});

export const setNotificationMessage = (
  notification: NotificationInterface
) => ({
  type: NOTIFICATION_MESSAGE,
  payload: notification,
});
export const showOurPhonesAction = () => ({
  type: SHOW_ORU_PHONES,
});
