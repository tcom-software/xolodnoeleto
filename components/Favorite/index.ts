import Favorite from "./Favorite";
import { connect } from "react-redux";

const mapStateToProps = ({
  favorite: { items: favoriteProducts },
  general: { isMobile },
}) => ({
  isMobile,
  favoriteProducts,
});

export default connect(mapStateToProps)(Favorite);
