import AddReview from "./AddReview";
import { connect } from "react-redux";
import { closeModal, openModal } from "redux/actions/modalActions";

const mapDispatchToProps = (dispatch) => ({
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(false, mapDispatchToProps)(AddReview);
