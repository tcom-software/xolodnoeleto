import { connect } from "react-redux";
import FunctionalContainer from "./FunctionalContainer";
import { addCompareProduct } from "redux/actions/compareActions";
import { addToFavorite } from "redux/actions/favoriteActions";
import { addBasket } from "redux/actions/basketActions";
import {
  incrementProductCount,
  decrementProductCount,
} from "redux/actions/productActions";
import { setNotificationMessage } from "../../../../redux/actions/generalActions";

const mapStateToProps = ({
  general: { isMobile },
  product: { productInfo },
}) => ({
  productInfo,
  isMobile,
});

const mapDispatchToProps = (dispatch) => ({
  addCompareProduct: (data) => dispatch(addCompareProduct(data)),
  addToFavorite: (data) => dispatch(addToFavorite(data)),
  addBasket: (product) => dispatch(addBasket(product)),
  incrementProduct: () => dispatch(incrementProductCount()),
  decrementProduct: () => dispatch(decrementProductCount()),
  setNotificationMessage: (message) =>
    dispatch(setNotificationMessage(message)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunctionalContainer);