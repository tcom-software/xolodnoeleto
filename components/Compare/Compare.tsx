import React, { useState } from "react";
import theme from "styles/theme";
import { makePrice } from "@utils";
import { CompareContainer } from "./styles";
import { Button, GlobalSection, Input, SvgIcon } from "@famous";

const Compare = ({
  addBasket,
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
      mobileBackground={theme.body.background}
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
            {products.map(({ id, src, manufacturer, model }) => {
              return (
                <div key={id}>
                  <img src={src} />
                  <p>
                    {manufacturer} {model}
                  </p>
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
          {products.map((product) => {
            const { id, src, manufacturer, model, price }: any = product;

            return (
              <div key={id}>
                <img src={src} alt="title" />
                <SvgIcon
                  type={"close"}
                  width={20}
                  height={20}
                  color={"#202020"}
                  callback={() => removeCompareProduct(id)}
                />
                <p>{model}</p>
                <p> {manufacturer}</p>
                <div>
                  <p>{makePrice(price)}</p>
                  <Button
                    type="secondary"
                    width={"156px"}
                    height={"45px"}
                    onClick={() => addBasket(product)}
                  >
                    В корзину
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CompareContainer>
    </GlobalSection>
  );
};

export default Compare;
