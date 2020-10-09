import { Container, GridSection } from "./styles";
import { TitleNavigation, AboutOrder } from "./content";
import { Button, GlobalSection, InputValidation } from "@atoms";
import theme from "styles/theme";
import MobileCase from "../ProductListView/MobileCase";
import WebCase from "../ProductListView/WebCase";
import StepInformation from "./content/StepInformation";
import React, { useState } from "react";
import { array } from "../Layout/PopUp/Modals/CallBack/data";

const steps = {
  stepOne: {
    top: [],
    current: [
      { title: "Вернуться к выбору товаров", svgType: "longArrowLeft" },
    ],
    bottom: [],
  },
  stepTwo: {
    top: [],
    current: [{ title: "Товары в заказе" }],
    bottom: [
      { title: "Покупатель" },
      { title: "Доставка" },
      { title: "Оплата" },
    ],
  },
  stepThree: {
    top: [{ title: "Товары в заказе" }],
    current: [{ title: "Покупатель" }],
    bottom: [{ title: "Доставка" }, { title: "Оплата" }],
  },
  stepFour: {
    top: [{ title: "Товары в заказе" }, { title: "Покупатель" }],
    current: [{ title: "Доставка" }],
    bottom: [{ title: "Оплата" }],
  },
  stepFive: {
    top: [
      { title: "Товары в заказе" },
      { title: "Покупатель" },
      { title: "Доставка" },
    ],
    current: [{ title: "Оплата" }],
    bottom: [],
  },
};
const customSwitch = (stepState) => {
  switch (stepState) {
    case 1:
      return steps.stepOne;
    case 2:
      return steps.stepTwo;
    case 3:
      return steps.stepThree;
    case 4:
      return steps.stepFour;
    case 5:
      return steps.stepFive;
    default:
      return steps.stepOne;
  }
};

const Basket = ({ basketItems, isMobile, stepState, BuyFormInputs }) => {
  const stepObject = customSwitch(stepState);
  const [errorState, setErrorState] = useState([]);
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressDelivery: "",
    commentByOrder: "",
  });
  const array = [
    {
      name: "fullName",
      type: "input",
      label: "Ф.И.О.",
    },
    {
      name: "email",
      type: "input",
      label: "E-Mail",
    },
    {
      name: "phone",
      type: "input",
      label: "Телефон",
    },
    {
      name: "addressDelivery",
      type: "input",
      label: "Адрес доставки",
    },
    {
      name: "commentByOrder",
      type: "input",
      label: "Комментарии к заказу",
    },
  ];

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
    <Container>
      <TitleNavigation
        title="Оформление заказа"
        currentPage="Оформление Заказа"
      />
      <GlobalSection
        isMobile={true}
        isWeb={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.secondBackground}
      >
        <GridSection stepState={stepState}>
          {stepState === 1 ? (
            isMobile ? (
              <MobileCase basketItems={basketItems} />
            ) : (
              <WebCase basketItems={basketItems} edit={true} header={true} />
            )
          ) : null}

          {stepState == 2 ? (
            <StepInformation stepStructure={stepObject}>
              {stepState == 2 ? (
                isMobile ? (
                  <MobileCase basketItems={basketItems} />
                ) : (
                  <WebCase basketItems={basketItems} edit={true} />
                )
              ) : null}
            </StepInformation>
          ) : null}

          {stepState == 3 ? (
            <StepInformation stepStructure={stepObject}>
              <form onSubmit={handleSubmit}>
                {/*BuyFormInputs*/}
                {array.map(({ name, type, label }: any, i: number) => (
                  <div>
                    <label htmlFor={name}> {label} </label>
                    <InputValidation
                      key={i}
                      forHtml={name}
                      type={type}
                      name={name}
                      data={info}
                      initialErrorState={!!~errorState.indexOf(name)}
                      callback={handleChange(name)}
                    />
                  </div>
                ))}
              </form>
            </StepInformation>
          ) : null}

          <AboutOrder />

          {stepState === 1 ? (
            <StepInformation stepStructure={stepObject} />
          ) : null}
        </GridSection>
      </GlobalSection>
    </Container>
  );
};

export default Basket;
