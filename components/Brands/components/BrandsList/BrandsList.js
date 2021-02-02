import React from "react";
import getConfig from "next/config";
import { Image } from "@famous";

const BrandsList = ({ brandsBrandPage }) => {
  const {
    publicRuntimeConfig: { serverUrl, brandsUpload },
  } = getConfig();

  return (
    <div className={`items`}>
      {brandsBrandPage?.brands &&
        brandsBrandPage.brands.map((e, i) => {
          console.log(e, "-----e");
          return (
            <div key={i} className={`item`}>
              <Image
                simpleWeb={`${serverUrl}/${brandsUpload}/${e.brand_logo}`}
                webpWeb={""}
              />
              <div className="info">
                <h3>{e.brand}</h3>
                <p>{e.product_count} товаров</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default BrandsList;
