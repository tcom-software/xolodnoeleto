import BrandProducts from "./BrandProducts";
import { connect } from "react-redux";
import { getBrandProducts } from "../../redux/actions/brandsActions";
import {
  clearFilters,
  clearFiltersSelectedData,
} from "../../redux/actions/catalogActions";

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
  clearFilters: () => dispatch(clearFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BrandProducts);
