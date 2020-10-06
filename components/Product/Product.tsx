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

const Product = ({
  src,
  title,
  price,
  vendorCode,
  buttonBorder,
  selectedStarsCount,
}: productInterface) => {
  return (
    <ProductContainer border={buttonBorder}>
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
      >
        В корзину
      </Button>
    </ProductContainer>
  );
};

export default Product;
