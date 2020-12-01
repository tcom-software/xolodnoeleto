import React, { useState } from "react";
import theme from "styles/theme";
import getConfig from "next/config";
import { CompareContainer } from "./styles";
import { makePrice, getImages } from "@utils";
import CreateCompareInformation from "./compareInformation";
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
  const {
    publicRuntimeConfig: { productsUpload, serverUrl },
  } = getConfig();

  const compareInformation = CreateCompareInformation(compareProducts);

  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      webBackground={theme.body.secondBackground}
      mobileBackground={theme.body.background}
    >
      <CompareContainer productCounts={products.length}>
        <div className="top-section">
          <div className="add-product-con">
            <div className="left-static-height">
              {array.map((_, i) => {
                if (type == 1) {
                  return (
                    <Button
                      key={i}
                      width="100%"
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
              <div className="added-products-con">
                {products.map(({ product, photo }) => {
                  const { id, brand, model } = product;
                  const { folder, file_name, file_format } = photo;
                  return (
                    <div key={id} className="item">
                      <img
                        src={`${serverUrl}${productsUpload}${folder}/size300/${file_name}.${file_format}`}
                      />
                      <p>
                        <span>{brand}</span>
                        <span>{model}</span>
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
            <div className="only-titles">
              {compareInformation &&
                Object.keys(compareInformation).map((e, i) => {
                  return (
                    <div key={i}>
                      <h3>{e}</h3>
                      {Object.keys(compareInformation[e]).map((ele, ind) => {
                        return <p key={ind}> {ele} </p>;
                      })}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="products-con">
            {products.map(({ product, photo }: any, index) => {
              const { folder, file_name, file_format } = photo;
              const { id, brand, model, price, articule } = product;
              return (
                <div key={id} className="product-container">
                  <div className="product-item">
                    <img
                      src={`${serverUrl}${productsUpload}${folder}/size300/${file_name}.${file_format}`}
                    />
                    <p>
                      {brand} {model}
                    </p>
                    <SvgIcon
                      type="close"
                      width={20}
                      height={20}
                      callback={() => removeCompareProduct(id)}
                    />
                    <div className="price-and-add-basket">
                      <p>{makePrice(price)}</p>
                      <Button
                        type="secondary"
                        width={"156px"}
                        height={"45px"}
                        onClick={(e) => {
                          e.preventDefault();
                          addBasket({
                            ...product,
                            ...getImages([photo], articule),
                          });
                        }}
                      >
                        В корзину
                      </Button>
                    </div>
                  </div>
                  <div className="information">
                    {compareInformation &&
                      Object.keys(compareInformation).map((e, i) => {
                        return (
                          <div key={i}>
                            <h3>{e}</h3>
                            {Object.keys(compareInformation[e]).map((ele) => {
                              return [compareInformation[e][ele][index]].map(
                                (_, valueIndex) => {
                                  return (
                                    <p key={valueIndex}>
                                      {compareInformation[e][ele][index] != null
                                        ? compareInformation[e][ele][index]
                                        : "_"}
                                    </p>
                                  );
                                }
                              );
                            })}
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CompareContainer>
    </GlobalSection>
  );
};

export default Compare;
