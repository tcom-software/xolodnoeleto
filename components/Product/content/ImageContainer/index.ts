import { connect } from "react-redux";
import ImageContainer from "./ImageContainer";

const mapStateToProps = ({ general: { isMobile }, product: { product } }) => ({
  product,
  isMobile,
});

export default connect(mapStateToProps)(ImageContainer);
