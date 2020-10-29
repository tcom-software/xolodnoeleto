import React, { useState } from "react";
import { GlobalSection } from "@famous";
import theme from "styles/theme";
import { useRouter } from "next/router";
import ReviewList from "../ReviewList";
import ProductList from "../ProductsList";
import ShowMoreWrapper from "../ShowMoreWrapper";
import ImageContainer from "./content/ImageContainer";
import FunctionalContainer from "./content/FunctionalContainer";
import { ProductTopContainer, ProductBottomContainer } from "./styles";

const Product = ({ product, seenProducts }) => {
  const router = useRouter();
  const { id } = router.query;
  const [moreSpec, setMoreSpec] = useState(false);

  return (
    <>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        mobilePadding={"20px 8px"}
      >
        <ProductTopContainer>
          <ImageContainer productKey={id} />
          <FunctionalContainer />
        </ProductTopContainer>
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.secondBackground}
      >
        <ProductBottomContainer>
          <div className="description">
            <h2>ОПИСАНИЕ</h2>
            <ShowMoreWrapper
              color="#5B5B5B"
              padding="15px 0"
              fromHeight={90}
              border={"none"}
              svgShow={false}
              buttonStyle={false}
              buttonTextAlign="left"
              text={product.description}
              buttonText={[`Показать больше`, `Показать меньше`]}
            />
          </div>
          <div className="specification">
            {product.characteristics.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`spec-item ${
                    i <= 1 ? "show" : moreSpec ? "show" : "hide"
                  }`}
                >
                  <h2 className="spec-item-title">{e.title}</h2>
                  {e.children.map((element, index) => {
                    return (
                      <div key={index} className="key-value-con">
                        <span className="mobile-border"></span>
                        <div className="key">{element.type}</div>
                        <div className="value">{element.value}</div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
            <div className="show-more-spec">
              <p onClick={() => setMoreSpec(!moreSpec)}>Показать больше</p>
            </div>
          </div>
        </ProductBottomContainer>
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding={"30px 0 0 0"}
        mobilePadding={"0"}
      >
        <ReviewList />
      </GlobalSection>
      <GlobalSection
        isWeb={true}
        isMobile={true}
        webBackground={theme.body.background}
        webPadding={"60px 0"}
        mobilePadding={"0"}
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
export default Product;
