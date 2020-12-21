import ProductsCon from "./ProductsCon";
import { addBasket } from "redux/actions/basketActions";
import {
  addCompareProduct,
  removeCompareProduct,
} from "redux/actions/compareActions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  addBasket: (product) => dispatch(addBasket(product)),
  addCompareProduct: (data) => dispatch(addCompareProduct(data)),
  removeCompareProduct: (id) => dispatch(removeCompareProduct(id)),
});

export default connect(null, mapDispatchToProps)(ProductsCon);
