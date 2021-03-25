import * as types from "../actions/modalActions";

const modalInitialState = {
  modalType: "",
  modalRef: null,
};

const ModalReducer = (state = modalInitialState, action) => {
  switch (action.type) {
    case types.SET_MODAL_REF:
      return {
        ...state,
        modalRef: action.payload,
      };
    case types.OPEN_MODAL:
      return {
        ...state,
        modalType: action.payload,
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        modalType: "",
      };
    default:
      return {
        ...state,
      };
  }
};

export default ModalReducer;
