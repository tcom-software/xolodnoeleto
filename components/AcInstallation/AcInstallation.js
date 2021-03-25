import { AcInstallationContainer } from "./styles";
import { GlobalSection, Image } from "@famous";
import theme from "styles/theme";
import TitleNavigation from "../TitleNavigation";
import React from "react";
import ProductList from "../ProductsList";
import { SeenProductWrapper } from "../FamousComponents";

const AcInstallation = ({
  seenProducts,
  acInstallation: {
    title,
    description: { firstPath, secondPath },
    information: {
      ourPriceList,
      installingPoints,
      InstallationIsCarriedOutAsFollows: installInfo,
      middleInfoWithBorder,
      service,
      casesOfMounting,
      ApartmentRenovation,
    },
  },
}) => {
  return (
    <>
      <TitleNavigation
        title="Установка Кондиционеров"
        currentPage="Становка Кондиционеров"
      />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
        webPadding={"0"}
        mobilePadding={"15px"}
      >
        <AcInstallationContainer>
          <div className="level-one">
            <div className="top">
              <Image
                simpleWeb={"/images/ac_installation/montajniki.jpg"}
                webpWeb={""}
              />
              <div>
                <h2>{title}</h2>
                <p>{firstPath}</p>
              </div>
            </div>
            <div className="bottom">
              <p>{secondPath}</p>
              <Image
                simpleWeb={"/images/ac_installation/montajniki_sertifikat.png"}
                webpWeb={""}
              />
            </div>
          </div>
        </AcInstallationContainer>
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
        webPadding={"0"}
        mobilePadding={"15px"}
      >
        <AcInstallationContainer isBottom={true}>
          <div className="bottom-side">
            <div className="level-two">
              <h2>{ourPriceList.title}</h2>
              {ourPriceList.children.map((e, i) => {
                return (
                  <div key={i} className={`information-item`}>
                    <div className="item">
                      <h2 className="info-item-title">{e.title.name}</h2>
                      <div className="item-value">
                        <p className="info-item-title">{e.title.value[0]}</p>
                        <p className="info-item-title">{e.title.value[1]}</p>
                      </div>
                    </div>

                    {e.children.map((element, index) => {
                      return (
                        <div className="item" key={index}>
                          <p className="info-item-title">{element.key}</p>
                          <div className="item-value">
                            <p className="info-item-title">
                              {element.value[0]}
                            </p>
                            <p className="info-item-title">
                              {element.value[1]}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
            <div className="level-three">
              <div className="title">
                <h3>{installingPoints.title}</h3>
                <p>{installingPoints.description}</p>
              </div>
              <div className="installing-points">
                {installingPoints.children.map((e, i) => (
                  <p key={i}>
                    {i + 1}.{e}
                  </p>
                ))}
              </div>
            </div>
            <div className="level-four">
              <h2>{installInfo.title}</h2>
              <div className="first-children">
                {installInfo.children.map((e, i) => (
                  <p key={i}>
                    {i + 1}.{e}
                  </p>
                ))}
              </div>
              <div className="middle-text">
                <p className="title">{installInfo.middleText.title}</p>
                <p className="description">
                  {installInfo.middleText.description}
                </p>
              </div>
              <div className="second-children">
                {installInfo.secondChildren.map((e, i) => (
                  <p key={i}>
                    {i + 1}.{e}
                  </p>
                ))}
              </div>
            </div>
            <div className="level-five">
              <div className="info-with-border">{middleInfoWithBorder}</div>
            </div>
            <div className="level-six">
              <div className="service">
                {service.children.map((e, i) => {
                  return (
                    <div key={i} className={`information-item`}>
                      <div className="item">
                        <h2 className="info-item-title">{e.title.name}</h2>
                        <div className="item-value">
                          <p className="info-item-title">{e.title.value}</p>
                        </div>
                      </div>

                      {e.children.map((element, index) => {
                        return (
                          <div className="item" key={index}>
                            <p className="info-item-title">{element.key}</p>
                            <div className="item-value">
                              <p className="info-item-title">
                                {element.value[0]}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="level-seven">
              <h2>{casesOfMounting.title}</h2>
              <div className="cases-info">
                {casesOfMounting.children.map((e, i) => {
                  return (
                    <div key={i} className="case-item">
                      <p className="your-number">Вариант Номер {i + 1}</p>
                      <Image
                        simpleWeb={"/images/ac_installation/cases/" + e.src}
                        webpWeb={""}
                      />
                      <p className="title">{e.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="level-eight">
              <h2>{ApartmentRenovation.title}</h2>
              <div className="apartment-renovation">
                <div className="apartment">
                  <p>{ApartmentRenovation.firstText}</p>
                  <Image
                    simpleWeb={
                      "/images/ac_installation/" + ApartmentRenovation.src
                    }
                    webpWeb={""}
                  />
                </div>
                <p>{ApartmentRenovation.secondText}</p>
              </div>
            </div>
          </div>
        </AcInstallationContainer>
      </GlobalSection>
      <SeenProductWrapper seenProducts={seenProducts}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          mobileBackground={theme.body.background}
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

export default AcInstallation;
