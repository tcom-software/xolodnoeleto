import React, { useState } from "react";
import { ModalContainer, Title, Body } from "./styles";
import { SvgIcon } from "@atoms";
import { InputValidation, Button } from "@atoms";
import { array } from "./data";

const AddReview = ({ modalRef, closeModal }) => {
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

    const array = Object.entries(info)
      .map((e) => (e[1] == "" ? e[0] : null))
      .filter((e) => e !== null && e !== "uploadImages");

    if (array.length > 0) {
      setErrorState(array);
    } else {
      console.log(11111);
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
              callback={handleChange(name)}
              initialErrorState={!!~errorState.indexOf(name)}
            />
          ))}
          <div className="rating-container">
            <p className={errorState.indexOf("rating") === -1 ? "" : "error"}>
              Оценка
            </p>
            <div className="rating">
              {Array.from(Array(5).keys()).map((e) => {
                const newE = e + 1;
                const { rating } = info;

                return (
                  <span
                    key={newE}
                    onClick={() => setInfo({ ...info, rating: newE })}
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
