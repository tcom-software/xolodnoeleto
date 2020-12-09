import React, { useEffect, useRef, useState } from "react";
import { Input, Loading } from "@famous";
import { SearchCon, Span } from "../../styles";
import HtmlCases from "../Search/HtmlCases";
import { SearchContainer } from "./styles";

const HeaderWebMobileSearch = ({
  isMobile,
  total,
  loading,
  search,
  new_search,
  new_loading,
  actionSearch,
  searchLoading,
  searchNewLoading,
}) => {
  const heightRef = useRef(null);
  const [page, setPage] = useState(1);
  const [searchWord, setWord] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

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

  if (isMobile) {
    return (
      <SearchContainer>
        <SearchCon mobileDisableView={true} isOpenSearch={isOpenSearch}>
          <Input
            search={true}
            svgSize={20}
            width="350px"
            height="35px"
            placeholder={"search"}
            callback={() => setIsOpenSearch(!isOpenSearch)}
            searchValue={searchWord}
            handleChange={(e) => {
              actionSearch(e.target.value, page);
              setWord(e.target.value);
            }}
          />

          <Span />
          <Span />
          <Span />
          <Span />
          <Span />
          <Span />
        </SearchCon>
        <div className="result-panel">
          <CustomCases />
        </div>
      </SearchContainer>
    );
  } else {
    return (
      <SearchContainer>
        <SearchCon>
          <Input
            svgSize={16}
            width="100%"
            height="35px"
            search={true}
            placeholder={"search"}
            searchValue={searchWord}
            handleChange={(e) => {
              actionSearch(e.target.value, page);
              setWord(e.target.value);
            }}
          />
        </SearchCon>
        <div className="result-panel">
          <CustomCases />
        </div>
      </SearchContainer>
    );
  }
};

export default HeaderWebMobileSearch;
