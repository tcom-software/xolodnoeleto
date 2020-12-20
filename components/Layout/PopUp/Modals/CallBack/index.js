import CallBack from "./CallBack";
import { connect } from "react-redux";
import { closeModal } from "redux/actions/modalActions";
import { setNotificationMessage } from "redux/actions/generalActions";

const mapStateToProps = ({ general: { worksTime } }) => ({
  worksTime,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  setNotificationMessage: (message) =>
    dispatch(setNotificationMessage(message)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CallBack);
