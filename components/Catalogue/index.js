import Catalogue from "./Catalogue";
import { connect } from "react-redux";
import { updateSelectedDataPage } from "../../redux/actions/catalogueActions";

const mapStateToProps = ({
  catalogue: { products, total },
  products: { seenProducts },
}) => ({
  total,
  products,
  seenProducts,
});
const mapDispatchToProps = (dispatch) => ({
  updateSelectedDataPage: (page) => dispatch(updateSelectedDataPage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
