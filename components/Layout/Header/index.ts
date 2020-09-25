import Header from "./Header";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: {
    header: { navigation },
    phones,
  },
}) => ({
  phones,
  navigation,
});

export default connect(mapStateToProps)(Header);
