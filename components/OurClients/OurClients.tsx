import React from "react";
import theme from "styles/theme";
import { GlobalSection, Image } from "@famous";
import TitleNavigation from "../TitleNavigation";
import { OurClientsContainer, Titleh3 } from "./styles";
import ProductList from "../ProductsList";

const OurClients = ({ ourClients, seenProducts }) => {
  return (
    <>
      <TitleNavigation title="НАШИ КЛИЕНТЫ" currentPage="ФНАШИ КЛИЕНТЫ" />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        webPadding={"0 0 30px 0"}
      >
        <Titleh3>МЫ НЕ ТОЛЬКО ПОКАЗЫВАЕМ, МЫ ДОКАЗЫВАЕМ</Titleh3>

        <OurClientsContainer
        // Click={(e) => e.target.src && changeBigImage(e.target.src)}
        >
          {ourClients.map(({ srcOne, srcTwo }, i) => {
            return (
              <div className="item" key={i}>
                <img src={srcTwo} className="front-img" />
                <img src={srcOne} className="backend-img" />
              </div>
            );
          })}
        </OurClientsContainer>
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

export default OurClients;
