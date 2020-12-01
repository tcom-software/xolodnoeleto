import React, { useState } from "react";
import { Image, Star } from "@famous";
import { ProductImageContainer } from "./styles";
import Link from "next/link";
import getConfig from "next/config";

const {
  publicRuntimeConfig: { productsUpload, serverUrl },
} = getConfig();

const ImageContainer = ({ productInfo, productKey, changeBigImage }) => {
  const {
    product: { brand, model },
    photos,
  } = productInfo;

  const imagesArray = photos.map(
    ({ folder, file_name, file_format }) =>
      `${serverUrl}${productsUpload}${folder}/size300/${file_name}.${file_format}`
  );

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
            photos.map((e, i) => {
              const { file_format, file_name, folder } = e;
              return (
                <Image
                  key={i}
                  simpleWeb={`${serverUrl}${productsUpload}${folder}/size300/${file_name}.${file_format}`}
                  webpWeb={""}
                  callback={() =>
                    setMain(
                      `${serverUrl}${productsUpload}${folder}/size300/${file_name}.${file_format}`
                    )
                  }
                  customClass={main == e ? "selected" : ""}
                />
              );
            })}
        </div>

        <div
          className="main-img"
          onClick={() => changeBigImage(main.replace("/size300", ""))}
        >
          {/*{superPrice ? <div className="super-price">СУПЕРЦЕНА</div> : null}*/}
          <img
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
