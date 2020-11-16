import Catalog from "./Catalog";
import { connect } from "react-redux";

const mapStateToProps = ({
  general: {
    header: { catalog },
  },
  modal: { modalRef, modalType },
}) => ({
  catalog,
  modalRef,
  modalType,
});

export default connect(mapStateToProps)(Catalog);
