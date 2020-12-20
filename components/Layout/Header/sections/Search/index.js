import Search from "./Search";
import { connect } from "react-redux";

const mapStateToProps = ({
  search: { loading, search, new_loading, new_search, total },
}) => ({
  loading,
  search,
  new_loading,
  new_search,
  total,
});

export default connect(mapStateToProps)(Search);
