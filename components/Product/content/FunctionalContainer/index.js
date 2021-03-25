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
  compare: { compareProducts },
}) => ({
  productInfo,
  isMobile,
  compareProducts,
});

const mapDispatchToProps = (dispatch) => ({
  addCompareProduct: (id) => dispatch(addCompareProduct(id)),
  addToFavorite: (product) => dispatch(addToFavorite(product)),
  addBasket: (product) => dispatch(addBasket(product)),
  incrementProduct: () => dispatch(incrementProductCount()),
  decrementProduct: () => dispatch(decrementProductCount()),
  setNotificationMessage: (notification) =>
    dispatch(setNotificationMessage(notification)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FunctionalContainer);
