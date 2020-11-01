import React, { useState } from "react";
import { Image, Star } from "@famous";
import { ProductImageContainer } from "./styles";
import { ProductTopContainer } from "../../styles";
import Link from "next/link";

const ImageContainer = ({ product, isMobile, productKey }) => {
  const { src, images, superPrice, vendorCode, selectedStarsCount } = product;
  const [main, setMain] = useState(src);

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
          Артикул | <span className="vendor-code">{vendorCode}</span>
        </div>
        <div className="mobile-stars-container">
          {Array.from(Array(5).keys()).map((e, i) => {
            return <Star key={i} item={i} selected={selectedStarsCount} />;
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
          {superPrice ? <div className="super-price">СУПЕРЦЕНА</div> : null}
          <Image simpleWeb={main} webpWeb={""} />
        </div>
      </div>
    </ProductImageContainer>
  );
};
export default ImageContainer;
