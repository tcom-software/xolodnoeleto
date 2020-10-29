import React from "react";
import Link from "next/link";
import { Button, Star } from "@famous";
import {
  Image,
  Title,
  Stars,
  Price,
  VendorCod,
  ProductContainer,
} from "./styles";
import { makePrice } from "@utils";
import { productInterface } from "interfaces";

const ProductGridView = ({
  item: product,
  addBasket,
  buttonBorder,
}: productInterface) => {
  const {
    src,
    manufacturer,
    model,
    price,
    vendorCode,
    superPrice,
    selectedStarsCount,
  } = product;
  return (
    <ProductContainer border={buttonBorder}>
      <Link href={`/product/${model}`}>
        <a>
          {superPrice ? <div className="super-price">СУПЕРЦЕНА</div> : null}
          <Image src={src} alt={manufacturer} />
          <Title>
            <p>{model}</p>
            <p>{manufacturer}</p>
          </Title>
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
            onClick={(e) => {
              e.preventDefault();
              addBasket(product);
            }}
          >
            В корзину
          </Button>
        </a>
      </Link>
    </ProductContainer>
  );
};

export default ProductGridView;
