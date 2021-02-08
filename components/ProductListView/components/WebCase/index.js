import WebCase from "./WebCase";
import { connect } from "react-redux";

import {
  addBasket,
  changeOrderStep,
  decrementBasketCount,
  deleteBasketItem,
  incrementBasketCount,
  manipulationSelectedData,
  updateStepsResult,
} from "../../../../redux/actions/basketActions";
import {
  decrementFavoriteCount,
  deleteFavoriteItem,
  incrementFavoriteCount,
} from "../../../../redux/actions/favoriteActions";
import { setNotificationMessage } from "../../../../redux/actions/generalActions";

const mapDispatchToProps = (dispatch) => ({
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (data) => dispatch(updateStepsResult(data)),

  addBasket: (product) => dispatch(addBasket(product)),

  incrementBasket: (id) => dispatch(incrementBasketCount(id)),
  decrementBasket: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
  incrementFavorite: (id) => dispatch(incrementFavoriteCount(id)),
  decrementFavorite: (id) => dispatch(decrementFavoriteCount(id)),
  deleteFavoriteItem: (id) => dispatch(deleteFavoriteItem(id)),
  manipulationSelectedData: (data) => dispatch(manipulationSelectedData(data)),
  setNotificationMessage: (message) =>
    dispatch(setNotificationMessage(message)),
});

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

export default connect(mapStateToProps, mapDispatchToProps)(WebCase);
