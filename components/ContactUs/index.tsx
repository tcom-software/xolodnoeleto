import ContactUs from "./ContactUs";
import { connect } from "react-redux";
import { changeBigImage } from "redux/actions/generalActions";

const mapStateToProps = ({ products: { seenProducts } }) => ({
  seenProducts,
});

const mapDispatchToProps = (dispatch) => ({
  changeBigImage: (src) => dispatch(changeBigImage(src)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
