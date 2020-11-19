import Catalog from "./Catalog";
import { connect } from "react-redux";
import { closeModal } from "redux/actions/modalActions";

const mapStateToProps = ({
  catalogue: { catalogMenu: catalog },
  modal: { modalRef, modalType },
}) => ({
  catalog,
  modalRef,
  modalType,
  closeModal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
