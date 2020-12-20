import React, { useState } from "react";
import { array } from "./data";
import getConfig from "next/config";
import { ModalContainer, Title, Body } from "./styles";
import { FillFormItem, Button, SvgIcon } from "@famous";
import { formValidation, axiosInstance } from "@utils";

const {
  publicRuntimeConfig: { addReview },
} = getConfig();

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

    if (checkedInfo.length > 0) {
      setErrorState([...checkedInfo]);
    } else {
      const { fullName, address, date, message, rating, uploadImages } = info;
      setErrorState([]);

      const formData = new FormData();
      const day = date.getUTCDate();
      const month = date.getUTCMonth();
      const year = date.getUTCFullYear();

      formData.append("rating", rating);
      formData.append("address", address);
      formData.append("comment", message);
      formData.append("full_name", fullName);
      formData.append("date", `${year}-${month + 1}-${day + 1}`);
      uploadImages.forEach((e) => formData.append("file[]", e.file));

      axiosInstance
        .post(addReview, formData)
        .then(({ data }) => {
          if (data === "success") {
            closeModal("");
            setNotificationMessage("ваш отзыв в обработке");
          }
        })
        .catch(console.log);
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
          {array.map(({ name, type }, i) => (
            <FillFormItem
              key={i}
              type={type}
              name={name}
              data={info}
              textareaHeight={100}
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
