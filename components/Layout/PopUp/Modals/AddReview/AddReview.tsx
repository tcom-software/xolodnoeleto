import React, { useState } from "react";
import { ModalContainer, Title, Body } from "./styles";
import { FillFormItem, Button, SvgIcon } from "@famous";
import { array } from "./data";
import { formValidation } from "@utils";

const AddReview = ({ modalRef, closeModal, setNotificationMessage }) => {
  const [errorState, setErrorState] = useState([]);
  const [info, setInfo] = useState({
    fullName: "",
    address: "",
    date: "",
    message: "",
    rating: 0,
    uploadImages: [],
  });

  const handleChange = (name) => (value) => setInfo({ ...info, [name]: value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedInfo = formValidation(array, info);

    console.log(checkedInfo, "------------checkedInf");

    // uploadImages
    if (checkedInfo.length > 0) {
      setErrorState([...checkedInfo]);
    } else {
      setErrorState([]);
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
            <FillFormItem
              key={i}
              type={type}
              name={name}
              data={info}
              textareaHeight={160}
              callback={handleChange(name)}
              initialErrorState={!!~errorState.indexOf(name)}
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
