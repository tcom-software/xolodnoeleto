import { InstallationPhotoContainer } from "./styles";
import { GlobalSection, Image } from "@famous";
import theme from "../../styles/theme";
import TitleNavigation from "../TitleNavigation";
import React from "react";
import ProductList from "../ProductsList";

const InstallationPhotos = ({
  seenProducts,
  InstallationPhotos,
  changeBigImage,
}) => {
  return (
    <>
      <TitleNavigation
        title="Фото Наших Монтажей"
        currentPage="Фото Наших Монтажей"
      />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        webPadding={"30px 0"}
      >
        <InstallationPhotoContainer
          onClick={(e) => e.target.src && changeBigImage(e.target.src)}
        >
          {InstallationPhotos.map((e, i) => {
            return (
              <div className="item" key={i}>
                <Image simpleWeb={e} webpWeb={""} />
              </div>
            );
          })}
        </InstallationPhotoContainer>
      </GlobalSection>
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
    </>
  );
};

export default InstallationPhotos;
