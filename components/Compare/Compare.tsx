import React, { useState } from "react";
import { CompareContainer } from "./styles";
import { Button, GlobalSection, Input, SvgIcon } from "@atoms";
import theme from "styles/theme";

const Compare = ({
  compareProducts,
  addCompareProduct,
  removeCompareProduct,
}) => {
  const [type, setType] = useState(1);
  const products = Object.values(compareProducts);
  const array = [...Array(3 - products.length == 0 ? 0 : 1)];

  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      webBackground={theme.body.secondBackground}
    >
      <CompareContainer productCounts={products.length}>
        <div>
          {array.map((_, i) => {
            if (type == 1) {
              return (
                <Button
                  key={i}
                  width="264px"
                  height="47px"
                  type="primary"
                  onClick={() => setType(2)}
                >
                  ДОБАВИТЬ НОВЫЙ ТОВАР
                </Button>
              );
            } else {
              return (
                <Input
                  key={i}
                  svgSize={29}
                  width="100%"
                  height="47px"
                  search={true}
                  callback={() => {
                    setType(1), addCompareProduct();
                  }}
                  placeholder={"Ищите среди миллиона товаров..."}
                />
              );
            }
          })}

          <div>
            {products.map(({ id, src, title }) => {
              return (
                <div key={id}>
                  <img src={src} />
                  <p>{title}</p>
                  <SvgIcon
                    type="close"
                    width={20}
                    height={20}
                    callback={() => removeCompareProduct(id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {products.map(
            ({ id, src, title, vendorCode, price, selectedStarsCount }) => {
              return (
                <div key={id}>
                  <img src={src} alt="title" />
                  <p>{title}</p>
                </div>
              );
            }
          )}
        </div>
      </CompareContainer>
    </GlobalSection>
  );
};

export default Compare;
