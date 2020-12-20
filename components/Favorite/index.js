import Favorite from "./Favorite";
import { connect } from "react-redux";

const mapStateToProps = ({
  favorite: { items: favoriteProducts },
  general: { isMobile, seenProducts },
}) => ({
  isMobile,
  seenProducts,
  favoriteProducts,
});

export default connect(mapStateToProps)(Favorite);
