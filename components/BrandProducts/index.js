import BrandProducts from "./BrandProducts";
import { connect } from "react-redux";
import { getBrandProducts } from "../../redux/actions/brandsActions";
import { clearFiltersSelectedData } from "../../redux/actions/catalogActions";

const mapStateToProps = ({
  brands: { brandProducts },
  catalog: { selectedData },
}) => ({
  brandProducts,
  selectedData,
});

const mapDispatchToProps = (dispatch) => ({
  getBrandProducts: (page, brandId, object) =>
    dispatch(getBrandProducts(page, brandId, object)),
  clearFiltersSelectedData: (page, brandId, object) =>
    dispatch(clearFiltersSelectedData(page, brandId, object)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandProducts);
