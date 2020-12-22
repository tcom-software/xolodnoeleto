import React, { useState } from "react";
import { Image, Star } from "@famous";
import { ProductImageContainer } from "./styles";
import Link from "next/link";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { productsUpload, serverUrl, seriesUpload },
} = getConfig();

const ImageContainer = ({ productInfo, productKey, changeBigImage }) => {
  const {
    product: { brand, model },
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
        / ... help me ... / {model}
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
          {photos.length > 1 &&
            imagesArray.map((e, i) => {
              return (
                <Image
                  key={i}
                  simpleWeb={e}
                  webpWeb={""}
                  callback={() => setMain(e)}
                  customClass={main == e ? "selected" : ""}
                  onError={(error) => {
                    error.target.src = "/images/no_found/broken-image.png";
                  }}
                />
              );
            })}
        </div>

        <div
          className="main-img"
          // onClick={() => changeBigImage(main.replace("/size300", ""))}
        >
          {/*{superPrice ? <div className="super-price">СУПЕРЦЕНА</div> : null}*/}
          <img
            src={main}
            alt={`${brand} ${model}`}
            title={`${brand} ${model}`}
            onError={(error) => {
              error.target.src = "/images/no_found/broken-image.png";
            }}
          />
        </div>
      </div>
    </ProductImageContainer>
  );
};
export default ImageContainer;