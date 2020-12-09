import React, { useState, useRef, useEffect } from "react";
import HtmlCases from "./HtmlCases";
import { Input, Loading } from "@famous";
import { SearchContainer } from "./styles";
import { SearchCon } from "../../styles";

const Search = ({ loading, new_loading, search, total, actionSearch }) => {
  // const pageCount = Math.floor(total / 15);
  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     console.log(e.target);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (searchWord === "") {
  //     actionSearch("", 1);
  //   }
  // }, [searchWord]);

  // const handleScroll = (event) => {
  //   const { clientHeight, scrollHeight, scrollTop } = heightRef.current;
  //   const result = scrollHeight - scrollTop === clientHeight;
  //   if (result) {
  //     if (total > page * 15) {
  //       actionSearch(searchWord, page + 1);
  //       setPage(page + 1);
  //     }
  //   }
  // };

  // ref={heightRef} onScroll={handleScroll}

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
