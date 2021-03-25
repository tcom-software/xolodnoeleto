import Catalog from "./Catalog";
import { connect } from "react-redux";
import { closeModal } from "redux/actions/modalActions";

const mapStateToProps = ({
  catalog: { catalogMenu: catalog },
  modal: { modalRef, modalType },
  general: { isMobile },
}) => ({
  isMobile,
  catalog,
  modalRef,
  modalType,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
