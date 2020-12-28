import OurPhones from "./OurPhones";
import { connect } from "react-redux";
import { showOurPhonesAction } from "redux/actions/generalActions";

const mapStateToProps = ({ general: { showOurPhones } }) => ({
  showOurPhones,
});

const mapDispatchToProps = (dispatch) => ({
  showOurPhonesAction: () => dispatch(showOurPhonesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(OurPhones);
