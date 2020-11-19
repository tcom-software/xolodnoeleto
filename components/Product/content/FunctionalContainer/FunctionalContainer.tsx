import { Button, Image, Star, SvgIcon } from "@famous";
import React from "react";
import { IncDec, makePrice } from "@utils";
import { ProductInformationContainer } from "./styles";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { serverUrl, brandsUpload },
} = getConfig();

const FunctionalContainer = ({
  product,
  addBasket,
  addToFavorite,
  addCompareProduct,
  incrementProduct,
  decrementProduct,
}: any) => {
  const { id, count, model, price, brand, brand_logo, manufacturer } = product;

  return (
    <ProductInformationContainer>
      <div className="level-one">
        <div className="vendor-code-container">
          Артикул | <span className="vendor-code">{id}</span>
        </div>
        <div className="calc">
          {IncDec(id, count, incrementProduct, decrementProduct)}
        </div>
        <div className="few-svg">
          <SvgIcon
            type={"compare"}
            width={20}
            height={20}
            color={"#202020"}
            callback={() => addCompareProduct(product)}
          />
          <SvgIcon
            type={"favorite"}
            width={20}
            height={20}
            color={"#202020"}
            callback={() => addToFavorite(product)}
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
          {IncDec(id, count, incrementProduct, decrementProduct)}
        </div>
        <div className="add-basket-and-brand-container">
          <Image
            simpleWeb={`${serverUrl}${brandsUpload}${brand_logo}`}
            webpWeb={""}
          />
          <Button
            type="primary"
            width="170px"
            height="50px"
            onClick={() => addBasket(product)}
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
            <p>{manufacturer}</p>
            <p>{model}</p>
          </div>
          <p className="price">{makePrice(price)}</p>
        </div>
        <Button
          type="primary"
          width="100%"
          height="50px"
          onClick={() => addBasket(product)}
        >
          В корзину
        </Button>
      </div>
    </ProductInformationContainer>
  );
};

export default FunctionalContainer;
