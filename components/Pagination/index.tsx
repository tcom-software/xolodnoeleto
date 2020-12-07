import Pagination from "./Pagination";
import { connect } from "react-redux";
import { updateSelectedDataPage } from "../../redux/actions/catalogueActions";

const mapStateToProps = ({ catalogue: { total }, general: { isMobile } }) => ({
  total,
  isMobile,
});

const mapDispatchToProps = (dispatch) => ({
  updateSelectedDataPage: (page) => dispatch(updateSelectedDataPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
