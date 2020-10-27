import ReviewList from "./ReviewList";
import { connect } from "react-redux";
import { openModal } from "redux/actions/modalActions";

const mapStateToProps = ({
  review: { items: reviewItems },
  general: { isMobile },
  modal: { modalType, modalRef },
}) => ({
  isMobile,
  reviewItems,
  modalType,
  modalRef,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
