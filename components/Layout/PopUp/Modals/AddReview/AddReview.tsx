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
          <div className="rating-container">
            <p className={errorState.indexOf("rating") === -1 ? "" : "error"}>
              Оценка a
            </p>
            <div className="rating">
              {Array.from(Array(5).keys()).map((e) => {
                const newE = e + 1;
                const { rating } = info;

                return (
                  <span
                    key={newE}
                    onClick={() => {
                      setInfo({ ...info, rating: newE });
                      const index = errorState.indexOf("rating");
                      if (index !== -1) {
                        errorState.splice(index, 1);
                        setErrorState([...errorState]);
                      }
                    }}
                    className={newE == rating ? "active" : ""}
                  >
                    {newE}
                  </span>
                );
              })}
            </div>
          </div>
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
