import Modals from "./Modals";
import { connect } from "react-redux";
import { closeModal, openModal } from "../../redux/actions/modalActions";
import { PopUpContainer } from "./styles";

const PopUp = ({ modalType, openModal, closeModal }) => {
  switch (modalType) {
    case "catalog":
    case "navigation":
      return null;
    default:
      const Modal = Modals[modalType];
      return modalType != "" ? (
        <PopUpContainer>
          <Modal />
        </PopUpContainer>
      ) : null;
  }
};

const mapStateToProps = ({ modal: { modalType } }) => ({
  modalType,
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (type) => dispatch(openModal(type)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
