import React from "react";
import theme from "styles/theme";
import { GlobalSection, Image } from "@famous";
import TitleNavigation from "../TitleNavigation";
import { OurClientsContainer } from "./styles";

const OurClients = ({ ourClients }) => {
  return (
    <>
      <TitleNavigation title="ФНАШИ КЛИЕНТЫ" currentPage="ФНАШИ КЛИЕНТЫ" />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        webPadding={"30px 0"}
      >
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
    </>
  );
};

export default OurClients;
