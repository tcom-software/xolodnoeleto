import HeaderWebMobileSearch from "./SearchResult";
import { connect } from "react-redux";
import { actionSearch } from "redux/actions/searchActions";
import { whereWasSearchAction } from "redux/actions/generalActions";

const mapStateToProps = ({
  general: { whereWasSearch },
  search: { loading, search, new_loading, total },
}) => ({
  loading,
  search,
  new_loading,
  total,
  whereWasSearch,
});

const mapDispatchToProps = (dispatch) => ({
  actionSearch: (searchWord, page) => dispatch(actionSearch(searchWord, page)),
  whereWasSearchAction: (where) => dispatch(whereWasSearchAction(where)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWebMobileSearch);
