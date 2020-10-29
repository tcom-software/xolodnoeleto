import { connect } from "react-redux";
import FunctionalContainer from "./FunctionalContainer";
import { addCompareProduct } from "redux/actions/compareActions";
import { addToFavorite } from "redux/actions/favoriteActions";
import { addBasket } from "redux/actions/basketActions";
import {
  incrementProductCount,
  decrementProductCount,
} from "redux/actions/productActions";

const mapStateToProps = ({ general: { isMobile }, product: { product } }) => ({
  product,
  isMobile,
});

const mapDispatchToProps = (dispatch) => ({
  addCompareProduct: (data) => dispatch(addCompareProduct(data)),
  addToFavorite: (data) => dispatch(addToFavorite(data)),
  addBasket: (product) => dispatch(addBasket(product)),
  incrementProduct: () => dispatch(incrementProductCount()),
  decrementProduct: () => dispatch(decrementProductCount()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunctionalContainer);
