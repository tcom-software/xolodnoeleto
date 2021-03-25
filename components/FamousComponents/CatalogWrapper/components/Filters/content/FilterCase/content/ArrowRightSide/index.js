import ArrowRightSide from "./ArrowRightSide";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: { isMobile },
  catalog: { firstLevelFiltersArray },
}) => ({ isMobile, firstLevelFiltersArray });

export default connect(mapStateToProps)(ArrowRightSide);
