import React from "react";
import Link from "next/link";
import { makePrice } from "@utils";

const HtmlCases = ({ search }) => {
  return search.map((e, i) => {
    const { id, brand, model, price } = e;
    return (
      <Link href={`/products/${id}`} key={id}>
        <a>
          <div className={"item-container"}>
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
