import { connect } from "react-redux";
import ImageContainer from "./ImageContainer";
import { changeBigImage } from "redux/actions/generalActions";

const mapStateToProps = ({
  general: { isMobile },
  product: { productInfo },
}) => ({
  productInfo,
  isMobile,
});

const mapDispatchToProps = (dispatch) => ({
  changeBigImage: (path) => dispatch(changeBigImage(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
