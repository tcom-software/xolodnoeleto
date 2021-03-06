import React, { useState } from "react";
import { array } from "./data";
import getConfig from "next/config";
import axiosInstance from "utils/axiosInstance";
import { ModalContainer, Title, Body } from "./styles";
import { FillFormItem, Button, SvgIcon, OurPhones } from "@famous";
import { formValidation } from "@utils";

const {
  publicRuntimeConfig: { callbackRequest },
} = getConfig();

const CallBack = ({
  closeModal,
  worksTime,
  modalRef,
  isMobile,
  phones,
  setNotificationMessage,
}) => {
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
    const checkedInfo = formValidation(array, info);

    if (checkedInfo.length > 0) {
      setErrorState(checkedInfo);
    } else {
      setErrorState([]);
      const { name, surname, phone, dateForCall, message } = info;
      axiosInstance
        .post(
          callbackRequest,
          JSON.stringify({
            name,
            last_name: surname,
            phone,
            hour: dateForCall,
            comment: message,
          })
        )
        .then(({ data }) => {
          if (data === "success") {
            closeModal("");
            setNotificationMessage({
              message: "Мы вам перезвоним",
              type: "success",
            });
            setInfo({
              name: "",
              surname: "",
              phone: "",
              dateForCall: "",
              message: "",
            });
          }
        })
        .catch(console.log);
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
          {isMobile ? <OurPhones phones={phones} /> : null}
          {array.map(({ name, type, required }, i) => (
            <FillFormItem
              key={i}
              type={type}
              name={name}
              data={info}
              required={required}
              worksTime={worksTime}
              callback={handleChange(name)}
              initialErrorState={!!~errorState.indexOf(name)}
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
