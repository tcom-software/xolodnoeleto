import ArrowRightSide from "./ArrowRightSide";
import { connect } from "react-redux";
import { actionFirstFiltersLevelArray } from "redux/actions/catalogueActions";

const mapStateToProps = ({
  general: { isMobile },
  catalogue: { firstLevelFiltersArray },
}) => ({ isMobile, firstLevelFiltersArray });

const mapDispatchToProps = (dispatch) => ({
  actionFirstFiltersLevelArray: (filter) =>
    dispatch(actionFirstFiltersLevelArray(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArrowRightSide);
