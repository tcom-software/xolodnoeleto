import React from "react";
import Link from "next/link";
import { Button, Star, ProductImage } from "@famous";

import {
  Image,
  Title,
  Stars,
  Price,
  VendorCod,
  ProductContainer,
} from "./styles";

import { makeImagePath, makePrice } from "@utils";
import { productInterface } from "interfaces";

const ProductGridView = ({
  item: product,
  addBasket,
  buttonBorder,
  superPrice,
  setNotificationMessage,
}: productInterface) => {
  /**
   * There are two case data from the backend about products
   *
   * */
  const { id, model, brand, price } = product;
  const imagePath = makeImagePath(product);

  return (
    <ProductContainer border={buttonBorder}>
      <Link href={`/product/${id}`}>
        <a>
          <ProductImage
            src={imagePath}
            alt={`${brand} ${model}`}
            title={`${brand} ${model}`}
            className="grid-view-product-image"
          />
          <Title>
            <p>{model}</p>
            <p>{brand}</p>
          </Title>
          <VendorCod>Артикул | {id}</VendorCod>
          <Stars>
            {Array.from(Array(5).keys()).map((e, i) => {
              return <Star key={i} item={i} selected={5} />;
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
              setNotificationMessage("Товар добавлен в корзину");
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
