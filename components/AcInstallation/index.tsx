import AcInstallation from "./AcInstallation";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: { acInstallation },
  products: { seenProducts },
}) => ({
  seenProducts,
  acInstallation,
});
export default connect(mapStateToProps)(AcInstallation);
