import SearchResult from "./SearchResult";
import { connect } from "react-redux";
import {
  actionSearch,
  whereWasSearchAction,
  searchInputValueAction,
} from "redux/actions/searchActions";

const mapStateToProps = ({
  search: {
    loading,
    search,
    new_loading,
    total,
    whereWasSearch,
    searchInputValue,
  },
}) => ({
  loading,
  search,
  new_loading,
  total,
  whereWasSearch,
  searchInputValue,
});

const mapDispatchToProps = (dispatch) => ({
  actionSearch: (searchWord, page) => dispatch(actionSearch(searchWord, page)),
  whereWasSearchAction: (where) => dispatch(whereWasSearchAction(where)),
  searchInputValueAction: (value) => dispatch(searchInputValueAction(value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
