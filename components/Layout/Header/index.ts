import Header from "./Header";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: {
    header: { navigation, elseRefs },
    phones,
  },
}) => ({
  phones,
  elseRefs,
  navigation,
});

export default connect(mapStateToProps)(Header);
