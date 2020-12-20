import Information from "./Information";
import { connect } from "react-redux";

const mapStateToProps = ({ general: { phones } }) => ({
  phones,
});
export default connect(mapStateToProps)(Information);
