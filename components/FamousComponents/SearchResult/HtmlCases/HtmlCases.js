import React from "react";
import Link from "next/link";
import { makePrice } from "@utils";

const HtmlCases = ({
  search,
  type,
  addCompareProduct,
  searchInputValue = null,
}) => {
  return search.map((e) => {
    const { id, brand, model, price } = e;
    const vendorCode = id === parseInt(searchInputValue) ? true : false;
    if (type === "compare") {
      return (
        <div
          key={id}
          className={"item-container"}
          onClick={() => addCompareProduct(id)}
        >
          <div className={"title"}>
            <p>{brand}</p>
            <p>{model}</p>
          </div>
          <p>{makePrice(price)}</p>
        </div>
      );
    }
    return (
      <Link href={`/product/${id}`} key={id}>
        <a>
          <div className={`item-container ${vendorCode ? "active" : ""}`}>
            {vendorCode ? <span>Артикул | {searchInputValue}</span> : null}
            <div className={"title"}>
              <p>{brand}</p>
              <p>{model}</p>
            </div>
            <p>{makePrice(price)}</p>
          </div>
        </a>
      </Link>
    );
  });
};

export default HtmlCases;
