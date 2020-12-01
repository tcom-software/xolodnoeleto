import { connect } from "react-redux";
import Characteristics from "./Characteristics";

const mapStateToProps = ({ product: { productInfo } }) => ({
  productInfo,
});

export default connect(mapStateToProps)(Characteristics);
