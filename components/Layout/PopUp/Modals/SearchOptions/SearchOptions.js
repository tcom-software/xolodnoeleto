import React from "react";
import { SearchOptionsContainer } from "./styles";

const SearchOptions = ({ modalRef, lastLevelCatalogItems }) => {
  console.log(lastLevelCatalogItems, "------lastLevelCatalogs");
  return (
    <SearchOptionsContainer ref={modalRef}>hahahahhaha</SearchOptionsContainer>
  );
};

export default SearchOptions;
