import Search from "./Search";
import { connect } from "react-redux";
import { actionSearch } from "redux/actions/searchActions";

const mapStateToProps = ({ search: { searched, loading } }) => ({
  searched,
  loading,
});

const mapDispatchToProps = (dispatch) => ({
  actionSearch: (searchWord) => dispatch(actionSearch(searchWord)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Search);
