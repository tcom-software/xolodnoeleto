import Pagination from "./Pagination";
import { connect } from "react-redux";

const mapStateToProps = ({ general: { isMobile } }) => ({
  isMobile,
});

export default connect(mapStateToProps)(Pagination);
