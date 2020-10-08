import Basket from "./Basket";
import { connect } from "react-redux";

const mapStateToProps = ({
  basket: { items, stepState },
  general: { isMobile },
}) => ({
  isMobile,
  stepState,
  basketItems: items,
});

export default connect(mapStateToProps)(Basket);
