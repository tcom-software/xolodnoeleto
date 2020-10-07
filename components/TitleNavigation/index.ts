import Basket from "./Basket";
import { connect } from "react-redux";

const mapStateToProps = ({ basket: stepState }) => ({
  stepState,
});

export default connect(mapStateToProps)(Basket);
