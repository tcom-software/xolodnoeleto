import React, { useState } from "react";
import { ModalContainer, Title, Body } from "./styles";
import { SvgIcon } from "@atoms";
import { InputValidation, Button } from "@atoms";
import { array } from "./data";

const AddReview = ({ modalType, modalRef, openModal, closeModal }) => {
  const [errorState, setErrorState] = useState([]);
  const [info, setInfo] = useState({
    fullName: "",
    address: "",
    date: "",
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
          ДОБАВИТЬ КОММЕНТАРИЙ
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
              callback={handleChange(name)}
            />
          ))}
          <Button
            type="default"
            width="100%"
            height="47px"
            background={"#FFD600"}
          >
            Отправить
          </Button>
        </Body>
      </form>
    </ModalContainer>
  );
};

export default AddReview;
