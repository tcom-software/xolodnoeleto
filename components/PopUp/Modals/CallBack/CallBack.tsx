import React, { useState } from "react";
import { ModalContainer, Title, Body } from "./styles";
import SvgIcons from "../../../atoms/SvgIcon";
import { closeModal } from "../../../../redux/actions/modalActions";
import { connect } from "react-redux";
import { InputValidation } from "@atoms";

const array = [
  {
    name: "name",
    type: "input",
  },
  {
    name: "surname",
    type: "input",
  },
  {
    name: "phone",
    type: "input",
  },
  {
    name: "dateForCall",
    type: "select",
  },
  {
    name: "message",
    type: "textarea",
  },
];
const CallBack = ({ closeModal }) => {
  const [info, setInfo] = useState({
    name: "",
    surname: "",
    phone: "",
    dateForCall: "",
    message: "",
  });

  const handleChange = (name) => (value) => {
    setInfo({ ...info, [name]: value });
  };

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
        {array.map(({ name, type }: any, i: number) => (
          <InputValidation
            type={name}
            key={i}
            data={info}
            callback={handleChange(name)}
          />
        ))}
      </Body>
    </ModalContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});
export default connect(false, mapDispatchToProps)(CallBack);
