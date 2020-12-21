import React from "react";
import getConfig from "next/config";
import { Button, SvgIcon } from "@famous";
import { makePrice, getImages } from "@utils";

const ProductsCon = ({
  products,
  addBasket,
  compareInformation,
  removeCompareProduct,
}) => {
  const {
    publicRuntimeConfig: { productsUpload, serverUrl },
  } = getConfig();

  return (
    <div className="products-con">
      {products.map(({ product, photo }, index) => {
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
  );
};

export default ProductsCon;
