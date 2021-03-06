import React from "react";
import getConfig from "next/config";
import { Button, SvgIcon } from "@famous";
import { makePrice, adsImgCollection } from "@utils";

const ProductsCon = ({
  products,
  addBasket,
  compareInformation,
  removeCompareProduct,
  setNotificationMessage,
}) => {
  const {
    publicRuntimeConfig: { productsUpload, serverUrl, seriesUpload },
  } = getConfig();

  return (
    <div className="products-con">
      {products.map(({ product, photo }, index) => {
        const { folder, file_name, file_format } = photo;
        const { articule: id, brand, price, series_name } = product;

        let { model } = product;
        model = model.replaceAll("-", " - ");
        model = model.replaceAll("/", " / ");

        return (
          <div key={id} className="product-container">
            <div className="product-item">
              {folder === "product_series0" ? (
                <img
                  src={`${serverUrl}${seriesUpload}/size300/${file_name}.${file_format}`}
                />
              ) : (
                <img
                  src={`${serverUrl}${productsUpload}/size300/${file_name}.${file_format}`}
                />
              )}
              <div className="p-group">
                <p>{brand}</p>
                <p>{series_name}</p>
                <p>{model}</p>
              </div>
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
                  onClick={(e) => {
                    e.preventDefault();
                    addBasket({
                      ...product,
                      ...adsImgCollection([photo]),
                    });
                    setNotificationMessage({
                      message: "Товар добавлен в корзину",
                      type: "success",
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
                                <span className={"mobile-element"}>{ele}</span>
                                <span className={"desktop-element"}>
                                  {compareInformation[e][ele][index] != null
                                    ? compareInformation[e][ele][index]
                                    : "_"}
                                </span>
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
  );
};

export default ProductsCon;
