import ReviewList from "./ReviewList";
import { connect } from "react-redux";
import { openModal } from "redux/actions/modalActions";

const mapStateToProps = ({
  review: { initialReviews },
  general: { isMobile },
  modal: { modalType, modalRef },
}) => ({
  isMobile,
  modalType,
  modalRef,
  initialReviews,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
