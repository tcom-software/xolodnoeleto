import Certificates from "./Certificates";
import { connect } from "react-redux";
import { changeBigImage } from "redux/actions/generalActions";

const mapStateToProps = ({ general: { certificates } }) => ({
  certificates,
});

const mapDispatchToProps = (dispatch) => ({
  changeBigImage: (src) => dispatch(changeBigImage(src)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Certificates);
