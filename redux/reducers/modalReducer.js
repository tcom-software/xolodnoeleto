import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modalActions";

const modalInitialState = {
  modalType: "",
};

const ModalReducer = (state = modalInitialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalType: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalType: "",
      };
    default:
      return {
        ...state,
        modalType: "",
      };
  }
};

export default ModalReducer;
