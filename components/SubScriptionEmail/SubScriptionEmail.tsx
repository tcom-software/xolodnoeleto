// @ts-ignore
import { Button, GlobalSection, Image, FillFormItem } from "@famous";
import theme from "styles/theme";
import { Container, SubScriptionForm, Label, ImgContainer } from "./styles";
import React, { useState } from "react";

const SubScriptionEmail = () => {
  const [info, setInfo] = useState({ email: "" });
  const [errorState, setErrorState] = useState([]);

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
    <GlobalSection
      height="335px"
      isWeb={true}
      isMobile={true}
      heightMobile={"auto"}
      webBackground={theme.body.secondBackground}
    >
      <Container>
        <SubScriptionForm onSubmit={handleSubmit}>
          <Label htmlFor="subscriptionEmail">
            Введите адрес электронной почты
          </Label>
          <FillFormItem
            forHtml={"subscriptionEmail"}
            type={"text"}
            name={"email"}
            data={info}
            worksTime={null}
            callback={handleChange("email")}
            initialErrorState={!!~errorState.indexOf("email")}
          />
          <Button
            type="default"
            width="164px"
            height="50px"
            border="none"
            color="#202020"
            background="#FFD600"
            fontWeight={theme.body.fontBolder}
          >
            Отправить
          </Button>
        </SubScriptionForm>
        <ImgContainer>
          <Image
            simpleWeb="images/subscription-email/girl.png"
            simpleMobile="images/subscription-email/girl.png"
            webpWeb={""}
            webpMobile={""}
          />
          <Image
            simpleWeb="/images/subscription-email/subscribe-text.png"
            simpleMobile="images/subscription-email/subscribe-text.png"
            webpWeb={""}
            webpMobile={""}
          />
        </ImgContainer>
      </Container>
    </GlobalSection>
  );
};

export default SubScriptionEmail;
