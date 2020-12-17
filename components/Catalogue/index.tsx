import Catalogue from "./Catalogue";
import { connect } from "react-redux";
import { updateSelectedDataPage } from "../../redux/actions/catalogueActions";

const mapStateToProps = ({ catalogue: { products, total } }) => ({
  total,
  products,
});
const mapDispatchToProps = (dispatch) => ({
  updateSelectedDataPage: (page) => dispatch(updateSelectedDataPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
