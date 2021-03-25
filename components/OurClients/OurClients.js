import React from "react";
import theme from "styles/theme";
import { GlobalSection } from "@famous";
import ProductList from "../ProductsList";
import TitleNavigation from "../TitleNavigation";
import { OurClientsContainer, Titleh3, Item } from "./styles";
import { SeenProductWrapper } from "../FamousComponents";

const OurClients = ({ ourClients, seenProducts, changeBigImage }) => {
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

        <OurClientsContainer>
          {ourClients.map(({ srcOne, srcTwo }, i) => {
            return (
              <Item key={i} srcTwo={srcTwo} exception={srcOne == "11/1.png"}>
                <div className="front-con">
                  <img
                    src={`images/client_images/${srcOne}`}
                    className="front-img"
                  />
                </div>
                {srcTwo ? (
                  <div className="backend-con">
                    <img
                      src={`images/client_images/${srcTwo}`}
                      className="backend-img"
                      onClick={() => {
                        changeBigImage(`images/client_images/${srcTwo}`);
                      }}
                    />
                  </div>
                ) : null}
              </Item>
            );
          })}
        </OurClientsContainer>
      </GlobalSection>
      <SeenProductWrapper seenProducts={seenProducts}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          webPadding={"20px"}
        >
          <ProductList
            superPrice={false}
            title={"ВЫ НЕДАВНО СМОТРЕЛИ"}
            mobileType={"scroll"}
            products={seenProducts}
          />
        </GlobalSection>
      </SeenProductWrapper>
    </>
  );
};

export default OurClients;
