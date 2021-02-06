import React from "react";
import getConfig from "next/config";
import { IncDec, makePrice, adsImgCollection } from "@utils";
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
  isMobile,
  compareProducts,
}) => {
  const { product, photos } = productInfo;
  const {
    brand,
    model,
    series_name,
    price,
    count,
    articule,
    manufacturer_logo,
  } = product;
  const comparePL = Object.keys(compareProducts).length;

  const madePrice = React.useMemo(() => makePrice(price), [price]);
  const madePhotos = React.useMemo(() => adsImgCollection(photos), [photos]);

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
              if (isMobile && comparePL === 2) {
                setNotificationMessage({
                  message: "Вы уже добавили два продукта удалите один",
                  type: "warning",
                });
              } else if (!isMobile && comparePL === 3) {
                setNotificationMessage({
                  message: "Вы уже добавили три продукта удалите один",
                  type: "warning",
                });
              } else {
                setNotificationMessage({
                  message: "Товар готов для сравнения",
                  type: "success",
                });
                addCompareProduct(articule);
              }
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
                id: product.articule,
                ...madePhotos,
              });
              setNotificationMessage({
                message: "Товар добавлен в избранное",
                type: "success",
              });
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
            <p>{series_name}</p>
            <p>{model}</p>
          </div>
          <p className="price">{madePrice}</p>
        </div>
      </div>
      <div className="level-three">
        <div className="calc">
          {IncDec(articule, count, incrementProduct, decrementProduct)}
        </div>
        <div className="add-basket-and-brand-container">
          <Image
            simpleWeb={`${serverUrl}${brandsUpload}/${manufacturer_logo}`}
            webpWeb={""}
          />
          <Button
            type="primary"
            width="170px"
            height="50px"
            onClick={() => {
              addBasket({
                ...product,
                id: product.articule,
                ...madePhotos,
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
      <div className="level-four">
        <div className="terms-of-delivery">
          <SvgIcon type="delivery" width={30} height={30} color={"#5B5B5B"} />
          <p>Бесплатная доставка в пределах МКАД</p>
        </div>
        <div className="mobile-brand-image">
          <Image
            simpleWeb={`${serverUrl}${brandsUpload}${manufacturer_logo}`}
            webpWeb={""}
          />
        </div>
      </div>
      <div className="level-five-mobile">
        <div className="title-and-price-container">
          <div className="title">
            <p>{brand}</p>
            <p>{model}</p>
          </div>
          <p className="price">{madePrice}</p>
        </div>
        <Button
          type="primary"
          width="100%"
          height="50px"
          onClick={() => {
            addBasket({
              ...product,
              id: product.articule,
              ...madePhotos,
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
    </ProductInformationContainer>
  );
};

export default FunctionalContainer;
