import InstallationPhotos from "./InstallationPhotos";
import { connect } from "react-redux";
import { changeBigImage } from "redux/actions/generalActions";

const mapStateToProps = ({
  general: { InstallationPhotos },
  products: { seenProducts },
}) => ({
  seenProducts,
  InstallationPhotos,
});

const mapDispatchToProps = (dispatch) => ({
  changeBigImage: (src) => dispatch(changeBigImage(src)),
});
export default connect(mapStateToProps, mapDispatchToProps)(InstallationPhotos);
