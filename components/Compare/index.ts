import Compare from "./Compare";
import { connect } from "react-redux";
import {
  addCompareProduct,
  removeCompareProduct,
} from "redux/actions/compareActions";
import { addBasket } from "redux/actions/basketActions";

const mapStateToProps = ({ compare: { compareProducts } }) => ({
  compareProducts,
});

const mapDispatchToProps = (dispatch) => ({
  addBasket: (id) => dispatch(addBasket(id)),
  addCompareProduct: (data) => dispatch(addCompareProduct(data)),
  removeCompareProduct: (data) => dispatch(removeCompareProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
