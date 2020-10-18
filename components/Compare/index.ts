import Compare from "./Compare";
import { connect } from "react-redux";
import {
  addCompareProduct,
  removeCompareProduct,
} from "redux/actions/compareActions";

const mapStateToProps = ({ compare: { compareProducts } }) => ({
  compareProducts,
});

const mapDispatchToProps = (dispatch) => ({
  addCompareProduct: (data) => dispatch(addCompareProduct(data)),
  removeCompareProduct: (data) => dispatch(removeCompareProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Compare);
