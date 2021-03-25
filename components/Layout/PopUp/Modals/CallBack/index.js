import CallBack from "./CallBack";
import { connect } from "react-redux";
import { closeModal } from "redux/actions/modalActions";
import { setNotificationMessage } from "redux/actions/generalActions";

const mapStateToProps = ({ general: { worksTime, isMobile, phones } }) => ({
  worksTime,
  isMobile,
  phones,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  setNotificationMessage: (notification) =>
    dispatch(setNotificationMessage(notification)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CallBack);
