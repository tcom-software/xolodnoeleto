import React, { useState } from "react";
import { ModalContainer, Title, Body } from "./styles";
import { InputValidation, Button, SvgIcon } from "@famous";
import { array } from "./data";

const CallBack = ({ closeModal, worksTime, modalType, modalRef }) => {
  const [errorState, setErrorState] = useState([]);
  const [info, setInfo] = useState({
    name: "",
    surname: "",
    phone: "",
    dateForCall: "",
    message: "",
  });
  const handleChange = (name) => (value) => setInfo({ ...info, [name]: value });
  const handleSubmit = (e) => {
    e.preventDefault();

    const array = Object.entries(info)
      .map((e) => (e[1] == "" ? e[0] : null))
      .filter((e) => e !== null);

    if (array.length > 0) {
      setErrorState(array);
    } else {
    }
  };

  return (
    <ModalContainer ref={modalRef}>
      <form onSubmit={handleSubmit}>
        <Title>
          Заказ обратново званка
          <SvgIcon
            type="close"
            width={20}
            height={20}
            callback={() => closeModal()}
          />
        </Title>
        <Body>
          {array.map(({ name, type }: any, i: number) => (
            <InputValidation
              key={i}
              type={type}
              name={name}
              data={info}
              initialErrorState={!!~errorState.indexOf(name)}
              worksTime={worksTime}
              callback={handleChange(name)}
            />
          ))}
          <Button type="primary" width="100%" height="47px">
            ЗАКАЗАТЬ
          </Button>
        </Body>
      </form>
    </ModalContainer>
  );
};

export default CallBack;
