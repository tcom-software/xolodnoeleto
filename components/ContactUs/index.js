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
  setNotificationMessage: (src) => dispatch(setNotificationMessage(src)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
