import ContactUs from "./ContactUs";
import { connect } from "react-redux";
import {
  changeBigImage,
  setNotificationMessage,
} from "redux/actions/generalActions";

const mapStateToProps = ({ products: { seenProducts } }) => ({
  seenProducts,
});

const mapDispatchToProps = (dispatch) => ({
  changeBigImage: (src) => dispatch(changeBigImage(src)),
  setNotificationMessage: (notification) =>
    dispatch(setNotificationMessage(notification)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
