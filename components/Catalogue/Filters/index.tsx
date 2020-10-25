import Filters from "./Filters";
import { connect } from "react-redux";

const mapStateToProps = ({
  catalogue: { filters },
  general: { isMobile },
}) => ({ filters, isMobile });

export default connect(mapStateToProps)(Filters);
