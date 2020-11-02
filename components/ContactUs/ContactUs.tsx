import React, { useState } from "react";
import theme from "styles/theme";
import { GlobalSection } from "@famous";
import TitleNavigation from "../TitleNavigation";
import { ContactUsContainer } from "./styles";
import ProductList from "../ProductsList";
import { array } from "./data";
import Form from "./Form";
import Information from "./Information";

const ContactUs = ({ seenProducts }) => {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [errorState, setErrorState] = useState([]);

  const firstPiece = [array[0], array[1], array[2]];
  const secondPiece = [array[3]];

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
