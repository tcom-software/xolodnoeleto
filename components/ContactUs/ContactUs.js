import React, { useState } from "react";
import { array } from "./data";
import Form from "./Form";
import theme from "styles/theme";
import getConfig from "next/config";
import { GlobalSection } from "@famous";
import Information from "./Information";
import { formValidation } from "@utils";
import ProductList from "../ProductsList";
import { ContactUsContainer } from "./styles";
import TitleNavigation from "../TitleNavigation";
import axiosInstance from "../../utils/axiosInstance";
import { SeenProductWrapper } from "../FamousComponents";

const ContactUs = ({ seenProducts, setNotificationMessage }) => {
  const initialState = { fullName: "", email: "", phone: "", comment: "" };
  const [info, setInfo] = useState({ ...initialState });
  const [errorState, setErrorState] = useState([]);
  const willChangeArray = [...array];
  const secondPiece = [willChangeArray[willChangeArray.length - 1]];
  willChangeArray.pop();
  const firstPiece = [...willChangeArray];

  const {
    publicRuntimeConfig: { contactUs },
  } = getConfig();

  const handleChange = (name) => (value) => setInfo({ ...info, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkedInfo = formValidation(array, info);
    if (checkedInfo.length > 0) {
      setErrorState(checkedInfo);
    } else {
      const { fullName, email, phone, comment } = info;
      axiosInstance
        .post(
          contactUs,
          JSON.stringify({
            full_name: fullName,
            phone,
            email,
            comment,
          })
        )
        .then(({ data }) => {
          if (data === "success") {
            setErrorState([]);
            setInfo({ ...initialState });
            setNotificationMessage("Мы свяжемся с вами");
          }
        })
        .catch(console.log);
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
      <SeenProductWrapper seenProducts={seenProducts}>
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
      </SeenProductWrapper>
    </>
  );
};

export default ContactUs;
