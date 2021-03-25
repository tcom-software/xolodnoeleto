import PopUp from "./PopUp";
import { connect } from "react-redux";
import { closeModal, setModalRef } from "redux/actions/modalActions";

const mapStateToProps = ({ modal: { modalType, modalRef } }) => ({
  modalType,
  modalRef,
});

const mapDispatchToProps = (dispatch) => ({
  setModalRef: (ref) => dispatch(setModalRef(ref)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
