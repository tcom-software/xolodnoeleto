import { connect } from "react-redux";
import ButtonLayout from "./ButtonLayout";
import { filtersToggle } from "redux/actions/catalogueActions";

const mapStateToProps = ({
  catalogue: { filters },
  general: { isMobile },
}) => ({ filters, isMobile });

const mapDispatchToProps = (dispatch) => ({
  filtersToggle: () => dispatch(filtersToggle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLayout);
