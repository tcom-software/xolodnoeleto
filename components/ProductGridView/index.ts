import ProductGridView from "./ProductGridView";
import { addBasket } from "redux/actions/basketActions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  addBasket: (product) => dispatch(addBasket(product)),
});

export default connect(false, mapDispatchToProps)(ProductGridView);
