import Compare from "./Compare";
import { connect } from "react-redux";
import {
  addCompareProduct,
  removeCompareProduct,
} from "redux/actions/compareActions";
import { addBasket } from "redux/actions/basketActions";

const mapStateToProps = ({
  compare: { compareProducts },
  products: { seenProducts },
}) => ({
  compareProducts,
  seenProducts,
});

const mapDispatchToProps = (dispatch) => ({
  addBasket: (product) => dispatch(addBasket(product)),
  addCompareProduct: (data) => dispatch(addCompareProduct(data)),
  removeCompareProduct: (data) => dispatch(removeCompareProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
