import React, { useState } from "react";
import getConfig from "next/config";
import { Button, SvgIcon } from "@famous";

import HeaderWebMobileSearch from "../../../FamousComponents/SearchResult";

const AddProductCon = ({
  array,
  products,
  addCompareProduct,
  removeCompareProduct,
  compareInformation,
}) => {
  const [type, setType] = useState(1);
  const {
    publicRuntimeConfig: { productsUpload, serverUrl },
  } = getConfig();

  return (
    <div className="add-product-con">
      <div className="left-static-height">
        {array.map((_, i) => {
          if (type == 1) {
            return (
              <Button
                key={i}
                width="100%"
                height="47px"
                type="primary"
                onClick={() => setType(2)}
              >
                ДОБАВИТЬ НОВЫЙ ТОВАР
              </Button>
            );
          } else {
            return <HeaderWebMobileSearch key={i} where={"compare"} />;

            // setType(1),
            // addCompareProduct()
            // placeholder={"Ищите среди миллиона товаров..."}
          }
        })}
        <div className="added-products-con">
          {products.map(({ product, photo }) => {
            const { id, brand, model } = product;
            const { folder, file_name, file_format } = photo;
            return (
              <div key={id} className="item">
                <img
                  src={`${serverUrl}${productsUpload}${folder}/size300/${file_name}.${file_format}`}
                />
                <p>
                  <span>{brand}</span>
                  <span>{model}</span>
                </p>
                <SvgIcon
                  type="close"
                  width={20}
                  height={20}
                  callback={() => removeCompareProduct(id)}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="only-titles">
        {compareInformation &&
          Object.keys(compareInformation).map((e, i) => {
            return (
              <div key={i}>
                <h3>{e}</h3>
                {Object.keys(compareInformation[e]).map((ele, ind) => {
                  return <p key={ind}> {ele} </p>;
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AddProductCon;
