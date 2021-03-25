import React from "react";
import ProductList from "../ProductsList";
import { GlobalSection, Image } from "@famous";
import theme from "styles/theme";
import { PaymentAndDeliveryContainer } from "./styles";
import TitleNavigation from "../TitleNavigation";
import { SeenProductWrapper } from "../FamousComponents";

const PaymentAndDelivery = ({ seenProducts, paymentAndDelivery: cxt }) => {
  return (
    <>
      <TitleNavigation
        title="Оплата и доставка"
        currentPage="Оплата и доставка"
      />

      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
        webPadding={"30px 0"}
      >
        <PaymentAndDeliveryContainer>
          <div className="first-con">
            <Image simpleWeb={cxt.first.src} webpWeb={""} />
            <div className="texts">
              <h2>{cxt.first.content.title}</h2>
              <p>{cxt.first.content.text}</p>
            </div>
          </div>
          <div className="second-con">
            <div className="texts">
              <h2>{cxt.second.content.title}</h2>
              <p>{cxt.second.content.text}</p>
            </div>
            <Image simpleWeb={cxt.second.src} webpWeb={""} />
          </div>
          <div className="third-con">
            <div className="texts">
              <p>{cxt.third.content.text}</p>
            </div>
          </div>
        </PaymentAndDeliveryContainer>
      </GlobalSection>
      <SeenProductWrapper seenProducts={seenProducts}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          webPadding={"30px 0"}
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

export default PaymentAndDelivery;
