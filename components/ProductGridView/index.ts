import ProductGridView from "./ProductGridView";
import { addBasket } from "redux/actions/basketActions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => ({
  addBasket: (id) => dispatch(addBasket(id)),
});

export default connect(false, mapDispatchToProps)(ProductGridView);
