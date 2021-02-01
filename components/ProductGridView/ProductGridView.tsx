import React from "react";
import Link from "next/link";
import { Button, Star, ProductImage } from "@famous";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
  // superPrice,
  setNotificationMessage,
}: productInterface) => {
  /**
   * There are two case data from the backend about products
   *
   * */
  const { id, model, brand, price, series_name } = product;
  const imagePath = makeImagePath(product);
  const makeComped = (e, title) => {
    e.preventDefault();
    setNotificationMessage({
      message: `Вы скопировал ${title}`,
      type: "success",
    });
  };
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
          <Title
            title="Копировать модель"
            onClick={(e) => makeComped(e, "модель")}
          >
            <CopyToClipboard text={`${brand} ${series_name} ${model}`}>
              <>
                <p>{brand}</p>
                <p>{series_name}</p>
                <p>{model}</p>
              </>
            </CopyToClipboard>
          </Title>
          <VendorCod
            title="Копировать Артикул"
            onClick={(e) => makeComped(e, "Артикул")}
          >
            <CopyToClipboard text={id}>
              <p>Артикул | {id}</p>
            </CopyToClipboard>
          </VendorCod>
          <Stars>
            {Array.from(Array(5).keys()).map((e, i) => {
              return <Star key={i} item={i} selected={5} />;
            })}
          </Stars>
          <Price>{makePrice(price)}</Price>
          <span>Бесплатная установка</span>
          <Button
            type="secondary"
            width="170px"
            height="50px"
            border={buttonBorder}
            onClick={(e) => {
              e.preventDefault();
              addBasket(product);
              setNotificationMessage({
                message: "Товар добавлен в корзину",
                type: "success",
              });
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
