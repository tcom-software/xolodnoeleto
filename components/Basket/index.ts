import Basket from "./Basket";
import { connect } from "react-redux";

import {
  decrementBasketCount,
  deleteBasketItem,
  incrementBasketCount,
} from "redux/actions/basketActions";

const mapStateToProps = ({ basket: { items, stepState } }) => ({
  stepState,
  basketItems: items,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (id) => dispatch(incrementBasketCount(id)),
  decrement: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
