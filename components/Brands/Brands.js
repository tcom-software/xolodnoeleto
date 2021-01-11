import React, { useState } from "react";
import theme from "styles/theme";
import { GlobalSection, Image, SeenProductWrapper } from "@famous";
import TitleNavigation from "../TitleNavigation";
import { BrandsContainer } from "./styles";
import Letters from "./content/Letters";
import ProductList from "../ProductsList";

const Brands = ({ brandItems, seenProducts }) => {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <TitleNavigation title="бренды" currentPage="Бренды" />
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        mobileBackground={theme.body.background}
        webPadding={"20px 0 30px 0"}
      >
        <Letters selected={selected} setSelected={setSelected} />
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
        webPadding={"0 0 30px 0"}
      >
        <BrandsContainer>
          <div className="selected-letters">
            {selected.map((e, i) => {
              return (
                <div
                  key={i}
                  className="selected-letter"
                  onClick={() => {
                    setSelected([...selected.filter((elem) => elem !== e)]);
                  }}
                >
                  {e}
                </div>
              );
            })}
          </div>
          <div className="items">
            {brandItems.map((e, i) => {
              return (
                <div key={i} className="item">
                  <Image simpleWeb={e.src} webpWeb={""} />
                  <div className="info">
                    <h3>{e.name}</h3>
                    <p>53 товаров</p>
                  </div>
                </div>
              );
            })}
          </div>
        </BrandsContainer>
      </GlobalSection>
      <SeenProductWrapper seenProducts={seenProducts}>
        <GlobalSection
          isWeb={true}
          isMobile={true}
          webBackground={theme.body.background}
          webPadding={"60px 0"}
          mobilePadding={"20px 0"}
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

export default Brands;
