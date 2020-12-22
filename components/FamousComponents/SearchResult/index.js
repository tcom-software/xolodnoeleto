import SearchResult from "./SearchResult";
import { connect } from "react-redux";
import {
  actionSearch,
  whereWasSearchAction,
  searchInputValueAction,
  setNewRefForSearch,
} from "redux/actions/searchActions";

const mapStateToProps = ({
  search: {
    loading,
    search,
    new_loading,
    total,
    whereWasSearch,
    searchInputValue,
    refForSearch,
  },
}) => ({
  loading,
  search,
  new_loading,
  total,
  whereWasSearch,
  searchInputValue,
  refForSearch,
});

const mapDispatchToProps = (dispatch) => ({
  actionSearch: (searchWord, page) => dispatch(actionSearch(searchWord, page)),
  whereWasSearchAction: (where) => dispatch(whereWasSearchAction(where)),
  searchInputValueAction: (value) => dispatch(searchInputValueAction(value)),
  setNewRefForSearch: (ref) => dispatch(setNewRefForSearch(ref)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
