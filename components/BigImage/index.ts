import BigImage from "./BigImage";
import { connect } from "react-redux";
import { changeBigImage } from "redux/actions/generalActions";

const mapStateToProps = ({ general: { isOpenBigImg } }) => ({
  isOpenBigImg,
});

const mapDispatchToProps = (dispatch) => ({
  changeBigImage: (src) => dispatch(changeBigImage(src)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BigImage);
