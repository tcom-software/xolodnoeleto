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

import { makeImagePath, makePrice } from "@utils";
import { productInterface } from "interfaces";

const ProductGridView = ({
  item: product,
  addBasket,
  buttonBorder,
}: productInterface) => {
  const {
    id,
    model,
    brand,
    series_picture_folder,
    series_picture_file_name,
    series_picture_format,
    product_picture_folder,
    product_picture_file_name,
    product_picture_format,
    price,
  } = product;

  const imagePath = makeImagePath({
    series_picture_folder,
    series_picture_file_name,
    series_picture_format,
    product_picture_folder,
    product_picture_file_name,
    product_picture_format,
  });

  return (
    <ProductContainer border={buttonBorder}>
      <Link href={`/product/${model}`}>
        <a>
          <Image
            src={imagePath}
            alt={`${brand} ${model}`}
            title={`${brand} ${model}`}
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
