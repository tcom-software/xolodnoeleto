import React from "react";
import Cases from "../Cases";
import { Loading } from "@famous";

const CustomCases = ({
  where,
  products,
  loading,
  new_loading,
  actionSearch,
  searchInputValue,
  searchInputValueAction,
}) => {
  if (loading) {
    return <Loading />;
  } else if (new_loading) {
    return (
      <>
        <Cases
          products={products}
          type={where}
          actionSearch={actionSearch}
          searchInputValueAction={searchInputValueAction}
        />
        <Loading />
      </>
    );
  } else if (!loading && !new_loading && products.length > 0) {
    return (
      <Cases
        type={where}
        products={products}
        actionSearch={actionSearch}
        searchInputValue={searchInputValue}
        searchInputValueAction={searchInputValueAction}
      />
    );
  } else {
    return null;
  }
};

export default CustomCases;
