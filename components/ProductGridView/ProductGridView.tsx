import React from "react";
import { Button, Star } from "@atoms";
import {
  Image,
  Title,
  Stars,
  Price,
  VendorCod,
  ProductContainer,
} from "./styles";
import { makePrice } from "utils";
import { productInterface } from "interfaces";
import { lightblue } from "color-name";

const ProductGridView = ({
  id,
  src,
  title,
  price,
  addBasket,
  superPrice,
  vendorCode,
  buttonBorder,
  selectedStarsCount,
}: productInterface) => {
  return (
    <ProductContainer border={buttonBorder}>
      {superPrice ? <div className="super-price">СУПЕРЦЕНА</div> : null}
      <Image src={src} alt={title} />
      <Title>{title}</Title>
      <VendorCod>{vendorCode}</VendorCod>
      <Stars>
        {Array.from(Array(5).keys()).map((e, i) => {
          return <Star key={i} item={i} selected={selectedStarsCount} />;
        })}
      </Stars>
      <Price>{makePrice(price)}</Price>
      <Button
        type="secondary"
        width="170px"
        height="50px"
        border={buttonBorder}
        onClick={() => addBasket(id)}
      >
        В корзину
      </Button>
    </ProductContainer>
  );
};

export default ProductGridView;
