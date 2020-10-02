import PopUp from "./PopUp";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../../redux/actions/modalActions";

const mapStateToProps = ({ modal: { modalType } }) => ({
  modalType,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
