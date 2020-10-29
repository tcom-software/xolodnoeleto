import React, { useState } from "react";
import { Image } from "@famous";
import { ProductImageContainer } from "./styles";

const ImageContainer = ({ product }) => {
  const { src, images, superPrice } = product;
  const [main, setMain] = useState(src);

  return (
    <ProductImageContainer>
      <div className="small-images">
        {images.map((e, i) => (
          <Image
            key={i}
            simpleWeb={e}
            simpleMobile={e}
            webpWeb={""}
            webpMobile={""}
            callback={() => setMain(e)}
            customClass={main == e ? "selected" : ""}
          />
        ))}
      </div>
      <div className="main-img">
        {superPrice ? <div className="super-price">СУПЕРЦЕНА</div> : null}
        <Image
          simpleWeb={main}
          simpleMobile={main}
          webpWeb={""}
          webpMobile={""}
        />
      </div>
    </ProductImageContainer>
  );
};
export default ImageContainer;
