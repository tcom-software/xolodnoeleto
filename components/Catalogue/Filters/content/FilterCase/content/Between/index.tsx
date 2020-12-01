import { connect } from "react-redux";
import Between from "./Between";

const mapStateToProps = ({
  general: { isMobile },
  catalogue: { secondLevelFiltersArray },
}) => ({ isMobile, secondLevelFiltersArray });

export default connect(mapStateToProps)(Between);
