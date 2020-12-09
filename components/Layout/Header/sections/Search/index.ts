import Search from "./Search";
import { connect } from "react-redux";
import { actionSearch } from "redux/actions/searchActions";

const mapStateToProps = ({
  search: { loading, search, new_loading, new_search, total },
}) => ({
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
export default connect(mapStateToProps, mapDispatchToProps)(Search);
