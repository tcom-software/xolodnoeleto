import BasketProduct from "./BasketProduct";
import { connect } from "react-redux";

import {
  decrementBasketCount,
  deleteBasketItem,
  incrementBasketCount,
} from "redux/actions/basketActions";

const mapDispatchToProps = (dispatch) => ({
  increment: (id) => dispatch(incrementBasketCount(id)),
  decrement: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
});

export default connect(null, mapDispatchToProps)(BasketProduct);
