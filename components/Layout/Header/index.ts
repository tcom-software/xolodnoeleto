import Header from "./Header";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: {
    header: { navigation, elseRefs, catalog },
    phones,
  },
}) => ({
  phones,
  elseRefs,
  catalog,
  navigation,
});

export default connect(mapStateToProps)(Header);
