import ProductGridView from "./ProductGridView";
import { addBasket } from "redux/actions/basketActions";
import { connect } from "react-redux";
import { setNotificationMessage } from "redux/actions/generalActions";

const mapDispatchToProps = (dispatch) => ({
  addBasket: (product) => dispatch(addBasket(product)),
  setNotificationMessage: (message) =>
    dispatch(setNotificationMessage(message)),
});

export default connect(false, mapDispatchToProps)(ProductGridView);
