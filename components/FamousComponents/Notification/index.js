import Notification from "./Notification";
import { connect } from "react-redux";
import { setNotificationMessage } from "redux/actions/generalActions";

const mapStateToProps = ({ general: { notificationMessage } }) => ({
  notificationMessage,
});

const mapDispatchToProps = (dispatch) => ({
  setNotificationMessage: (message) =>
    dispatch(setNotificationMessage(message)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
