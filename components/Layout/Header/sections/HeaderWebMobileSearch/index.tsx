import HeaderWebMobileSearch from "./HeaderWebMobileSearch";
import { connect } from "react-redux";
import { actionSearch } from "redux/actions/searchActions";

const mapStateToProps = ({
  general: { isMobile },
  search: { loading, search, new_loading, new_search, total },
}) => ({
  isMobile,
  loading,
  search,
  new_loading,
  new_search,
  total,
});

const mapDispatchToProps = (dispatch) => ({
  searchLoading: (boolean) => dispatch(actionSearch(boolean)),
  searchNewLoading: (boolean) => dispatch(actionSearch(boolean)),
  actionSearch: (searchWord, page) => dispatch(actionSearch(searchWord, page)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWebMobileSearch);
