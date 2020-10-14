import Modals from "./Modals";
import { PopUpContainer } from "./styles";

const PopUp = ({ modalType, openModal, closeModal }) => {
  switch (modalType) {
    case "catalog":
    case "navigation":
    case "basket":
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

export default PopUp;
