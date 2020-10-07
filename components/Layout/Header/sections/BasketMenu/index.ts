import BasketMenu from "./BasketMenu";
import { connect } from "react-redux";

const mapStateToProps = ({ basket: { items, total_amount } }) => ({
  total_amount,
  basketItems: items,
});

export default connect(mapStateToProps)(BasketMenu);
