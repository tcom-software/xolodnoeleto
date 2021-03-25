export const INITIAL_STATE = "INITIAL_STATE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const SET_MODAL_REF = "SET_MODAL_REF";

const openModal = (type) => ({
  type: OPEN_MODAL,
  payload: type,
});

const closeModal = () => ({
  type: CLOSE_MODAL,
});

const setModalRef = (ref) => ({
  type: SET_MODAL_REF,
  payload: ref,
});

export { openModal, closeModal, setModalRef };
