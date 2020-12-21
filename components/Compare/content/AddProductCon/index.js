import AddProductCon from "./AddProductCon";
import { connect } from "react-redux";
import { addBasket } from "redux/actions/basketActions";
import {
  addCompareProduct,
  removeCompareProduct,
} from "redux/actions/compareActions";

const mapDispatchToProps = (dispatch) => ({
  addBasket: (product) => dispatch(addBasket(product)),
  addCompareProduct: (data) => dispatch(addCompareProduct(data)),
  removeCompareProduct: (data) => dispatch(removeCompareProduct(data)),
});

export default connect(null, mapDispatchToProps)(AddProductCon);
