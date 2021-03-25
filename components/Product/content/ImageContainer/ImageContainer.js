import React, { useState } from "react";
import { Image, Star, ProductImage } from "@famous";
import { ProductImageContainer } from "./styles";
import Link from "next/link";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { productsUpload, serverUrl, seriesUpload },
} = getConfig();

const ImageContainer = ({ productInfo, productKey, changeBigImage }) => {
  const {
    product: { brand, model, category_id, category_name },
    photos,
  } = productInfo;

  const imagesArray = photos.map(({ folder, file_name, file_format }) => {
    if (folder === "product_series0") {
      return `${serverUrl}${seriesUpload}/size300/${file_name}.${file_format}`;
    } else {
      return `${serverUrl}${productsUpload}/size300/${file_name}.${file_format}`;
    }
  });

  const [main, setMain] = useState(imagesArray[0]);

  return (
    <ProductImageContainer>
      <div className="nav-title">
        <Link href="/">
          <a>Главная</a>
        </Link>{" "}
        /{" "}
        <Link href={`/catalog/${category_id}`}>
          <a> {category_name}</a>
        </Link>{" "}
        / {brand} {model}
      </div>
      <div className="mobile-container">
        <div className="mobile-vendor-code">
          Артикул | <span className="vendor-code"> {productKey} </span>
        </div>
        <div className="mobile-stars-container">
          {Array.from(Array(5).keys()).map((e, i) => {
            return <Star key={i} item={i} selected={5} />;
          })}
        </div>
      </div>
      <div className="images-container">
        <div className="small-images">
          {photos.length > 0 &&
            imagesArray.map((e, i) => {
              return (
                <ProductImage
                  key={i}
                  src={e}
                  alt={e}
                  title={e}
                  callback={() => setMain(e)}
                  className={`${main == e ? "selected" : ""}`}
                />
              );
            })}
        </div>

        <div
          className="main-img"
          // onClick={() => changeBigImage(main.replace("/size300", ""))}
        >
          {/*{superPrice ? <div className="super-price">СУПЕРЦЕНА</div> : null}*/}
          <ProductImage
            src={main}
            alt={`${brand} ${model}`}
            title={`${brand} ${model}`}
          />
        </div>
      </div>
    </ProductImageContainer>
  );
};
export default ImageContainer;
