import Pagination from "./Pagination";
import { connect } from "react-redux";

const mapStateToProps = ({ catalogue: { total }, general: { isMobile } }) => ({
  total,
  isMobile,
});
export default connect(mapStateToProps)(Pagination);
