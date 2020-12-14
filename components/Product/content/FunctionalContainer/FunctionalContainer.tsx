import React from "react";
import getConfig from "next/config";
import { IncDec, makePrice, getImages } from "@utils";
import { Button, Image, Star, SvgIcon } from "@famous";
import { ProductInformationContainer } from "./styles";

const {
  publicRuntimeConfig: { serverUrl, brandsUpload },
} = getConfig();

const FunctionalContainer = ({
  productInfo,
  addBasket,
  addToFavorite,
  addCompareProduct,
  incrementProduct,
  decrementProduct,
  setNotificationMessage,
}: any) => {
  const { product, photos } = productInfo;
  const { brand, model, price, count, articule, manufacturer_logo } = product;

  const mainImages = photos.filter((e) => e.cover_photo === 1)[0];

  return (
    <ProductInformationContainer>
      <div className="level-one">
        <div className="vendor-code-container">
          Артикул | <span className="vendor-code">{articule}</span>
        </div>
        <div className="calc">
          {IncDec(articule, count, incrementProduct, decrementProduct)}
        </div>
        <div className="few-svg">
          <SvgIcon
            type={"compare"}
            width={20}
            height={20}
            color={"#202020"}
            callback={() => {
              addCompareProduct({
                product: {
                  ...productInfo.product,
                  id: articule,
                },
                photo: mainImages,
                characteristics: productInfo.characteristics,
              });
              setNotificationMessage("Товар добавлен в список для сравнение");
            }}
          />
          <SvgIcon
            type={"favorite"}
            width={20}
            height={20}
            color={"#202020"}
            callback={() => {
              addToFavorite({
                ...product,
                ...getImages(photos, articule),
              });
              setNotificationMessage("Товар добавлен в избранное");
            }}
          />
        </div>
      </div>
      <div className="level-two">
        <div className="stars-container">
          {Array.from(Array(5).keys()).map((e, i) => {
            return <Star key={i} item={i} selected={5} />;
          })}
        </div>
        <div className="title-and-price-container">
          <div className="title">
            <p>{brand}</p>
            <p>{model}</p>
          </div>
          <p className="price">{makePrice(price)}</p>
        </div>
      </div>
      <div className="level-three">
        <div className="calc">
          {IncDec(articule, count, incrementProduct, decrementProduct)}
        </div>
        <div className="add-basket-and-brand-container">
          <Image
            simpleWeb={`${serverUrl}${brandsUpload}${manufacturer_logo}`}
            webpWeb={""}
          />
          <Button
            type="primary"
            width="170px"
            height="50px"
            onClick={() => {
              addBasket({
                ...product,
                ...getImages(photos, articule),
              });
              setNotificationMessage("Товар добавлен в корзину");
            }}
          >
            В корзину
          </Button>
        </div>
      </div>
      <div className="level-four">
        <div className="terms-of-delivery">
          <SvgIcon type="delivery" width={30} height={30} color={"#5B5B5B"} />
          <p>Условия доставки</p>
        </div>
        <div className="mobile-brand-image">
          <Image simpleWeb={brand} webpWeb={""} />
        </div>
      </div>
      <div className="level-five-mobile">
        <div className="title-and-price-container">
          <div className="title">
            <p>{brand}</p>
            <p>{model}</p>
          </div>
          <p className="price">{makePrice(price)}</p>
        </div>
        <Button
          type="primary"
          width="100%"
          height="50px"
          onClick={() => {
            addBasket({
              ...product,
              ...getImages(photos, articule),
            });
            setNotificationMessage("Товар добавлен в корзину");
          }}
        >
          В корзину
        </Button>
      </div>
    </ProductInformationContainer>
  );
};

export default FunctionalContainer;
