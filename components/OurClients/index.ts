import OurClients from "./OurClients";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: { ourClients },
  products: { seenProducts },
}) => ({
  ourClients,
  seenProducts,
});

export default connect(mapStateToProps)(OurClients);
