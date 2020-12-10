import HeaderWebMobileSearch from "./HeaderWebMobileSearch";
import { connect } from "react-redux";
import { actionSearch } from "redux/actions/searchActions";

const mapStateToProps = ({
  general: { isMobile },
  search: { loading, search, new_loading, total },
}) => ({
  isMobile,
  loading,
  search,
  new_loading,
  total,
});

const mapDispatchToProps = (dispatch) => ({
  actionSearch: (searchWord, page) => dispatch(actionSearch(searchWord, page)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWebMobileSearch);
