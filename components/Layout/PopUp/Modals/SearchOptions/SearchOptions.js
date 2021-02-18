import React from "react";
import { SearchOptionsContainer } from "./styles";

const SearchOptions = ({ modalRef, lastLevelCatalogs }) => {
  console.log(lastLevelCatalogs, "------lastLevelCatalogs");
  return (
    <SearchOptionsContainer ref={modalRef}>hahahahhaha</SearchOptionsContainer>
  );
};

export default SearchOptions;
