import React from "react";
import Link from "next/link";
import { makePrice } from "@utils";

const Cases = ({
  type,
  products,
  addCompareProduct,
  searchInputValue = null,
  actionSearch,
  searchInputValueAction,
}) => {
  return products.map((e) => {
    const { id, brand, model, price } = e;
    const vendorCode = id === parseInt(searchInputValue) ? true : false;
    if (type === "compare") {
      return (
        <div
          key={id}
          className={`item-container ${vendorCode ? "active" : ""}`}
          onClick={() => {
            addCompareProduct(id);
            actionSearch("");
            searchInputValueAction("");
          }}
        >
          {vendorCode ? <span>Артикул | {searchInputValue}</span> : null}
          <div className={"title"}>
            <p>{brand}</p>
            <p>{model}</p>
          </div>
          <p>{makePrice(price)}</p>
        </div>
      );
    }
    return (
      <Link key={id} href={`/product/${id}`}>
        <a>
          <div
            className={`item-container ${vendorCode ? "active" : ""}`}
            onClick={() => {
              actionSearch("");
              searchInputValueAction("");
            }}
          >
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

export default Cases;
