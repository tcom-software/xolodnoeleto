import Filters from "./Filters";
import { connect } from "react-redux";

const mapStateToProps = ({ catalogue: { filters } }) => ({ filters });

export default connect(mapStateToProps)(Filters);
