import WrapList from "./WrapList";
import { connect } from "react-redux";

import { updateSelectedOrderBy } from "redux/actions/catalogActions";

const mapStateToProps = ({
  catalog: { selectedData },
  general: { isMobile },
}) => ({
  isMobile,
  selectedData,
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedOrderBy: (type) => dispatch(updateSelectedOrderBy(type)),
});
export default connect(mapStateToProps, mapDispatchToProps)(WrapList);
