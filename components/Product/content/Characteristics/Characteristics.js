import React, { useState } from "react";
import theme from "styles/theme";
import { GlobalSection, DataEmpty } from "@famous";
import { ProductBottomContainer } from "../../styles";
import ShowMoreWrapper from "../../../ShowMoreWrapper";

const Characteristics = ({ productInfo }) => {
  const [moreSpec, setMoreSpec] = useState(false);
  const characteristics = productInfo.characteristics.reduce((acc, next) => {
    const { title } = next;
    if (title === null) {
      return acc;
    } else if (acc[title]) {
      return {
        ...acc,
        [title]: [...acc[title], next],
      };
    } else {
      return {
        ...acc,
        [title]: [next],
      };
    }
  }, {});

  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      webBackground={theme.body.secondBackground}
    >
      {productInfo.characteristics.length === 0 ? (
        <DataEmpty title={"Характеристика отсутствует"} />
      ) : (
        <ProductBottomContainer>
          {productInfo.product.description === null ? null : (
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
                text={productInfo.product.description}
                buttonText={[`Показать больше`, `Показать меньше`]}
              />
            </div>
          )}
          <div className="specification">
            {Object.keys(characteristics).map((e, i) => {
              return (
                <div
                  key={i}
                  className={`spec-item ${
                    i <= 1 ? "show" : moreSpec ? "show" : "hide"
                  }`}
                >
                  <h2 className="spec-item-title">{e}</h2>
                  {characteristics[e].map((element, index) => {
                    return (
                      <div key={index} className="key-value-con">
                        <span className="mobile-border"></span>
                        <div className="key">{element.characteristic_name}</div>
                        <div className="value">
                          {element.characteristic_value
                            ? element.characteristic_value
                            : element.characteristic_attribute_name}
                        </div>
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
      )}
    </GlobalSection>
  );
};
export default Characteristics;
