import ProductsCon from "./ProductsCon";
import { addBasket } from "redux/actions/basketActions";
import {
  addCompareProduct,
  removeCompareProduct,
} from "redux/actions/compareActions";
import { connect } from "react-redux";
import { setNotificationMessage } from "redux/actions/generalActions";

const mapStateToProps = ({ general: { isMobile } }) => ({
  isMobile,
});
const mapDispatchToProps = (dispatch) => ({
  addBasket: (product) => dispatch(addBasket(product)),
  addCompareProduct: (data) => dispatch(addCompareProduct(data)),
  removeCompareProduct: (id) => dispatch(removeCompareProduct(id)),
  setNotificationMessage: (notification) =>
    dispatch(setNotificationMessage(notification)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsCon);
