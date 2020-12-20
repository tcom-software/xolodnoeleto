import React, { useState, useRef, useEffect } from "react";
import HtmlCases from "./HtmlCases";
import { Input, Loading } from "@famous";
import { SearchContainer } from "./styles";
import { SearchCon } from "../../styles";

const Search = ({ loading, new_loading, search }) => {
  const CustomCases = () => {
    if (loading) {
      return <Loading />;
    } else if (new_loading) {
      return (
        <>
          <HtmlCases search={search} />
          <Loading />
        </>
      );
    } else if (!loading && !new_loading && search.length > 0) {
      return <HtmlCases search={search} />;
    } else {
      return null;
    }
  };

  return (
    <SearchContainer searchLength={search.length}>
      <div className="result-panel">
        <CustomCases />
      </div>
    </SearchContainer>
  );
};

export default Search;
