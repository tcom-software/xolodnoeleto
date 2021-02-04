import React from "react";
import theme from "styles/theme";
import ProductList from "../ProductsList";
import TitleNavigation from "../TitleNavigation";
import { GlobalSection, Image } from "@famous";
import { InstallationPhotoContainer } from "./styles";
import { SeenProductWrapper } from "../FamousComponents";

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
                <Image simpleWeb={e.jpg} webpWeb={e.webP ? e.webP : e.jpg} />
              </div>
            );
          })}
        </InstallationPhotoContainer>
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

export default InstallationPhotos;
