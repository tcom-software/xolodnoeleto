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
  superPrice,
  setNotificationMessage,
}: productInterface) => {
  /**
   * There are two case data from the backend about products
   *
   * */
  const {
    id,
    model,
    brand,
    price,

    folder,
    file_name,
    file_format,
  } = product;

  let image;

  if (!product.product_picture_folder && !product.series_picture_folder) {
    image = { folder, file_name, file_format };
  } else {
    if (
      product.product_picture_folder &&
      product.product_picture_folder === "products0"
    ) {
      image = {
        folder: product.product_picture_folder,
        file_name: product.product_picture_file_name,
        file_format: product.product_picture_format,
      };
    } else {
      image = {
        folder: product.series_picture_folder,
        file_name: product.series_picture_file_name,
        file_format: product.series_picture_format,
      };
    }
  }
  const imagePath = makeImagePath(image);

  return (
    <ProductContainer border={buttonBorder}>
      <Link href={`/product/${id}`}>
        <a>
          <Image
            src={imagePath}
            alt={`${brand} ${model}`}
            title={`${brand} ${model}`}
            onError={(error) => {
              error.target.src = "/images/no_found/broken-image.png";
            }}
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
