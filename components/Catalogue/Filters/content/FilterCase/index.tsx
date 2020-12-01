import FilterCase from "./FilterCase";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: { isMobile },
  catalogue: { isOpenFilters, firstLevelFiltersArray },
}) => ({ isMobile, isOpenFilters, firstLevelFiltersArray });

export default connect(mapStateToProps)(FilterCase);
