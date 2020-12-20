import OurClients from "./OurClients";
import { connect } from "react-redux";
import { changeBigImage } from "redux/actions/generalActions";

const mapStateToProps = ({
  general: { ourClients },
  products: { seenProducts },
}) => ({
  ourClients,
  seenProducts,
});

const mapDispatchToProps = (dispatch) => ({
  changeBigImage: (src) => dispatch(changeBigImage(src)),
});
export default connect(mapStateToProps, mapDispatchToProps)(OurClients);
