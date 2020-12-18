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
  new_loading,
  actionSearch,
}) => {
  const heightRef = useRef(null);
  const [page, setPage] = useState(1);
  const [searchWord, setWord] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        actionSearch("");
        setWord("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleScroll = () => {
    const { clientHeight, scrollHeight, scrollTop } = heightRef.current;
    const result = scrollHeight - scrollTop === clientHeight;
    if (result) {
      if (total > page * 15) {
        actionSearch(searchWord, page + 1);
        setPage(page + 1);
      }
    }
  };

  return (
    <SearchContainer
      ref={containerRef}
      searchLength={search.length > 0 || loading || new_loading}
    >
      {isMobile ? (
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
              actionSearch(e.target.value);
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
      ) : (
        <SearchCon>
          <Input
            svgSize={16}
            width="100%"
            height="35px"
            search={true}
            placeholder={"search"}
            searchValue={searchWord}
            handleChange={(e) => {
              actionSearch(e.target.value);
              setWord(e.target.value);
            }}
          />
        </SearchCon>
      )}
      <div className="result-panel" ref={heightRef} onScroll={handleScroll}>
        {total ? (
          <h2 className="title">Количество продуктов ({total})</h2>
        ) : null}
        <CustomCases />
      </div>
    </SearchContainer>
  );
};

export default HeaderWebMobileSearch;
