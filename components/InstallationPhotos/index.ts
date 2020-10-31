import InstallationPhotos from "./InstallationPhotos";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: { InstallationPhotos },
  products: { seenProducts },
}) => ({
  seenProducts,
  InstallationPhotos,
});

export default connect(mapStateToProps)(InstallationPhotos);
