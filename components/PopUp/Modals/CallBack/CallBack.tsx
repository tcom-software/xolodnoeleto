import { ModalContainer, Title, Body } from "./styles";
import SvgIcons from "../../../atoms/SvgIcon";
import { closeModal } from "../../../../redux/actions/modalActions";
import { connect } from "react-redux";
import { InputValidation } from "@atoms";

const CallBack = ({ closeModal }) => {
  return (
    <ModalContainer>
      <Title>
        Заказ обратново званка
        <SvgIcons
          type="close"
          width={20}
          height={20}
          callback={() => closeModal()}
        />
      </Title>
      <Body>
        <InputValidation type="email" />
      </Body>
    </ModalContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});
export default connect(false, mapDispatchToProps)(CallBack);
