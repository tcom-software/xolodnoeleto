import Basket from "./BasketMenu";
import { connect } from "react-redux";
import { closeModal } from "../../../../../redux/actions/modalActions";

const mapStateToProps = ({ basket: { items } }) => ({
  basketItems: items,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Basket);
