import AddReview from "./AddReview";
import { connect } from "react-redux";
import { closeModal, openModal } from "redux/actions/modalActions";
import { setNotificationMessage } from "redux/actions/generalActions";

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
  setNotificationMessage: (src) => dispatch(setNotificationMessage(src)),
});

export default connect(false, mapDispatchToProps)(AddReview);
