import ArrowRightSide from "./ArrowRightSide";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: { isMobile },
  catalogue: { firstLevelFiltersArray },
}) => ({ isMobile, firstLevelFiltersArray });

export default connect(mapStateToProps)(ArrowRightSide);
