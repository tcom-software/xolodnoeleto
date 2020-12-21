import React from "react";
import theme from "styles/theme";
import { GlobalSection, Image } from "@famous";
import ProductList from "../ProductsList";
import { AboutUsContainer } from "./styles";
import TitleNavigation from "../TitleNavigation";

const AboutUs = ({ seenProducts }) => {
  const title = `УСТАНОВКА КОНДИЦИОНЕРОВ ЦЕНЫ УСТАНОВКА\n КОНДИЦИОНЕРОВ В МОСКВЕ И МОСКОВСКОЙ ОБЛАСТИ`;
  console.log(seenProducts, "-------seenProducts--------AboutUs");
  return (
    <>
      <TitleNavigation title="О нас" currentPage="О нас" />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webPadding={"30px 0"}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
      >
        <AboutUsContainer>
          <div className="img-container">
            <Image
              simpleWeb={"/images/ac_installation/montajniki.jpg"}
              webpWeb={""}
            />
            <Image
              simpleWeb={"/images/ac_installation/montajniki_sertifikat.png"}
              webpWeb={""}
            />
          </div>
          <div className="text-container">
            <h3>{title}</h3>
            <p>
              Наша компания предоставляет широкий спектр услуг в сфере систем
              кондиционирования воздуха, включающий как подбор и продажу
              климатического оборудования, так и установку и обслуживание систем
              кондиционирования любого типа: от монтажа бытовых кондиционеров и
              различных сплит-систем до проектирования и установки промышленных
              кондиционеров и комплексных систем кондиционирования.
            </p>
          </div>
        </AboutUsContainer>
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding={"20px"}
        mobilePadding={"20px"}
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

export default AboutUs;
