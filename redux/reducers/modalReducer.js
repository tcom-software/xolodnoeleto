import * as types from "../actions/modalActions";

const modalInitialState = {
  modalType: "",
};

const ModalReducer = (state = modalInitialState, action) => {
  switch (action.type) {
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
