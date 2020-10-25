import Catalogue from "./Catalogue";
import { connect } from "react-redux";

const mapStateToProps = ({
  catalogue: { products },
  general: { isMobile },
}) => ({
  products,
  isMobile,
});

export default connect(mapStateToProps)(Catalogue);
