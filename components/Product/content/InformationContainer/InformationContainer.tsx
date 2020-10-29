import { Button, Image, Star, SvgIcon } from "@famous";
import React from "react";
import { IncDec, makePrice } from "@utils";
import { ProductInformationContainer } from "./styles";
import theme from "styles/theme";

const InformationContainer = ({
  product: {
    vendorCode,
    selectedStarsCount,
    manufacturer,
    model,
    price,
    brand,
  },
}) => {
  return (
    <ProductInformationContainer>
      <div className="level-one">
        <div>{vendorCode}</div>
        <div className="few-svg">
          <SvgIcon type={"compare"} width={20} height={20} color={"#202020"} />
          <SvgIcon type={"favorite"} width={20} height={20} color={"#202020"} />
        </div>
      </div>
      <div className="level-two">
        <div className="stars-container">
          {Array.from(Array(5).keys()).map((e, i) => {
            return <Star key={i} item={i} selected={selectedStarsCount} />;
          })}
        </div>
        <div className="title-and-price-container">
          <div className="title">
            <p>{manufacturer}</p>
            <p>{model}</p>
          </div>
          <p className="price">{makePrice(price)}</p>
        </div>
      </div>
      <div className="level-three">
        <div className="calc">
          {/*{IncDec(id, count, incrementFavorite, decrementFavorite)}*/}
        </div>
        <div className="add-basket-and-brand-container">
          <Image
            simpleWeb={brand}
            simpleMobile={brand}
            webpWeb={""}
            webpMobile={""}
          />
          <Button type="primary" width="170px" height="50px">
            В корзину
          </Button>
        </div>
      </div>
      <div className="level-four">
        <div className="terms-of-delivery">
          <SvgIcon type="delivery" width={30} height={30} color={"#5B5B5B"} />
          <p>Условия доставки</p>
        </div>
      </div>
    </ProductInformationContainer>
  );
};
export default InformationContainer;
