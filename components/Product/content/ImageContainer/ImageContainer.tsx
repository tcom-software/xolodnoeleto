import React, { useState } from "react";
import { Image, Star } from "@famous";
import { ProductImageContainer } from "./styles";
import { ProductTopContainer } from "../../styles";
import Link from "next/link";
import { makeImagePath } from "@utils";

const ImageContainer = ({ product, isMobile, productKey }) => {
  const {
    id,
    count,
    model,
    brand,
    images,
    price,
    series_picture_folder,
    series_picture_file_name,
    series_picture_format,
    product_picture_folder,
    product_picture_file_name,
    product_picture_format,
  } = product;

  const imagePath = makeImagePath({
    series_picture_folder,
    series_picture_file_name,
    series_picture_format,
    product_picture_folder,
    product_picture_file_name,
    product_picture_format,
  });
  const [main, setMain] = useState(imagePath);

  return (
    <ProductImageContainer>
      <div className="nav-title">
        <Link href="/">
          <a>Главная</a>
        </Link>{" "}
        / Кондиционеры... / {productKey}
      </div>
      <div className="mobile-container">
        <div className="mobile-vendor-code">
          Артикул | <span className="vendor-code"> {id} </span>
        </div>
        <div className="mobile-stars-container">
          {Array.from(Array(5).keys()).map((e, i) => {
            return <Star key={i} item={i} selected={5} />;
          })}
        </div>
      </div>
      <div className="images-container">
        <div className="small-images">
          {images.map((e, i) => (
            <Image
              key={i}
              simpleWeb={e}
              webpWeb={""}
              callback={() => setMain(e)}
              customClass={main == e ? "selected" : ""}
            />
          ))}
        </div>
        <div className="main-img">
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
