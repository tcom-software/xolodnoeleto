import React from "react";
import getConfig from "next/config";
import { Image } from "@famous";
import Link from "next/link";

const BrandsList = ({ brandsBrandPage }) => {
  const {
    publicRuntimeConfig: { serverUrl, brandsUpload },
  } = getConfig();

  return (
    <div className={`items`}>
      {brandsBrandPage?.brands &&
        brandsBrandPage.brands.map((e, i) => {
          return (
            <Link href={`/brand-products/${e.id}`} key={i}>
              <a>
                <div className={`item`}>
                  <Image
                    simpleWeb={`${serverUrl}/${brandsUpload}/${e.brand_logo}`}
                    webpWeb={""}
                  />
                  <div className="info">
                    <h3>{e.brand}</h3>
                    <p>{e.product_count} товаров</p>
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
    </div>
  );
};

export default BrandsList;
