export const INITIAL_STATE = "INITIAL_STATE";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

const openModal = (type) => ({
  type: OPEN_MODAL,
  payload: type,
});

const closeModal = () => ({
  type: CLOSE_MODAL,
});

export { openModal, closeModal };
