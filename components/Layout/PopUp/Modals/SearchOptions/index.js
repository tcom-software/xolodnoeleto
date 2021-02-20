import AddReview from "./SearchOptions";
import { connect } from "react-redux";
import { closeModal } from "redux/actions/modalActions";
import { setNotificationMessage } from "redux/actions/generalActions";
import { setSelectedSearchCatalog } from "../../../../../redux/actions/searchActions";

const mapStateToProps = ({
  catalog: { lastLevelCatalogItems },
  search: { selectedSearchCatalog },
}) => ({
  lastLevelCatalogItems,
  selectedSearchCatalog,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  setNotificationMessage: (notification) =>
    dispatch(setNotificationMessage(notification)),
  setSelectedSearchCatalog: (catalog) =>
    dispatch(setSelectedSearchCatalog(catalog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
