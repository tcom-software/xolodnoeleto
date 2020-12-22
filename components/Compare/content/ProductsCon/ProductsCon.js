import React from "react";
import getConfig from "next/config";
import { Button, SvgIcon } from "@famous";
import { makePrice, getImages } from "@utils";

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
        const { articule: id, brand, model, price } = product;
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
                      ...getImages([photo], id),
                    });
                    setNotificationMessage("Товар добавлен в корзину");
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
  );
};

export default ProductsCon;
