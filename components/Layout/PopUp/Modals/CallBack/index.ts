import CallBack from "./CallBack";
import { connect } from "react-redux";
import { closeModal } from "../../../../../redux/actions/modalActions";

const mapStateToProps = ({ general: { worksTime } }) => ({
  worksTime,
});
const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(CallBack);
