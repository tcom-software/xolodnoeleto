import React, { useRef, useState } from "react";
import HtmlCases from "./HtmlCases";
import { Input, Loading } from "@famous";
import { SearchContainer } from "./styles";
import { SearchCon } from "../../Layout/Header/styles";

const SearchResult = ({
  total,
  loading,
  search,
  new_loading,
  actionSearch,

  where,
  whereWasSearch,
  whereWasSearchAction,

  searchInputValue,
  searchInputValueAction,

  refForSearch,
  setNewRefForSearch,
}) => {
  const heightRef = useRef(null);
  const [page, setPage] = useState(1);
  const CustomCases = () => {
    if (loading) {
      return <Loading />;
    } else if (new_loading) {
      return (
        <>
          <HtmlCases search={search} type={where} />
          <Loading />
        </>
      );
    } else if (!loading && !new_loading && search.length > 0) {
      return <HtmlCases search={search} type={where} />;
    } else {
      return null;
    }
  };
  const handleScroll = () => {
    const { clientHeight, scrollHeight, scrollTop } = heightRef.current;
    const result = scrollHeight - scrollTop === clientHeight;
    if (result) {
      if (total > page * 15) {
        actionSearch(searchInputValue, page + 1);
        setPage(page + 1);
      }
    }
  };

  return (
    <SearchContainer
      ref={whereWasSearch === where ? refForSearch : null}
      searchLength={search.length > 0 || loading || new_loading}
      onClick={(event) => {
        setNewRefForSearch({ current: event.currentTarget });
      }}
    >
      <SearchCon>
        <Input
          svgSize={16}
          width="100%"
          height="35px"
          search={true}
          placeholder={"search"}
          searchValue={whereWasSearch === where ? searchInputValue : ""}
          handleChange={(e) => {
            actionSearch(e.target.value);
            searchInputValueAction(e.target.value);
          }}
          onFocus={() => whereWasSearchAction(where)}
        />
      </SearchCon>
      {whereWasSearch === where ? (
        <div className="result-panel" ref={heightRef} onScroll={handleScroll}>
          {total ? (
            <h2 className="title">Количество продуктов ({total})</h2>
          ) : null}
          <CustomCases />
        </div>
      ) : null}
    </SearchContainer>
  );
};

export default SearchResult;
