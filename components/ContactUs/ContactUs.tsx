import React, { useState } from "react";
import { array } from "./data";
import Form from "./Form";
import theme from "styles/theme";
import { ContactUsContainer } from "./styles";
import ProductList from "../ProductsList";
import { GlobalSection } from "@famous";
import Information from "./Information";
import TitleNavigation from "../TitleNavigation";
import { formValidation } from "@utils";

const ContactUs = ({ seenProducts }) => {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [errorState, setErrorState] = useState([]);
  const willChangeArray = [...array];
  const secondPiece = [willChangeArray[willChangeArray.length - 1]];
  willChangeArray.pop();
  const firstPiece = [...willChangeArray];

  const handleChange = (name) => (value) => setInfo({ ...info, [name]: value });
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedInfo = formValidation(array, info);
    if (checkedInfo.length > 0) {
      setErrorState(checkedInfo);
    } else {
      setErrorState([]);
    }
  };

  return (
    <>
      <TitleNavigation title="Контакты" currentPage="Контакты" />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webPadding={"30px 0"}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
      >
        <ContactUsContainer>
          <Information />
          <Form
            info={info}
            firstPiece={firstPiece}
            secondPiece={secondPiece}
            errorState={errorState}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </ContactUsContainer>
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding={"20px"}
      >
        <ProductList
          title={"ВЫ НЕДАВНО СМОТРЕЛИ"}
          mobileType={"scroll"}
          products={seenProducts}
        />
      </GlobalSection>
    </>
  );
};

export default ContactUs;
