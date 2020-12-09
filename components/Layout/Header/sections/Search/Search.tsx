import React, { useState, useRef, useEffect } from "react";
import HtmlCases from "./HtmlCases";
import { Input, Loading } from "@famous";
import { SearchContainer } from "./styles";
import { SearchCon } from "../../styles";

const Search = ({ loading, new_loading, search, total, actionSearch }) => {
  const heightRef = useRef(null);
  const [searchWord, setWord] = useState("");
  // const pageCount = Math.floor(total / 15);
  const [page, setPage] = useState(1);

  // const pageCount = Math.floor(total / 15);
  // useEffect(() => {
  //   window.addEventListener("click", (e) => {
  //     console.log(e.target);
  //   });
  // }, []);

  useEffect(() => {
    if (searchWord === "") {
      actionSearch("", 1);
    }
  }, [searchWord]);

  const handleScroll = (event) => {
    const { clientHeight, scrollHeight, scrollTop } = heightRef.current;
    const result = scrollHeight - scrollTop === clientHeight;
    if (result) {
      if (total > page * 15) {
        actionSearch(searchWord, page + 1);
        setPage(page + 1);
      }
    }
  };

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
      <SearchCon>
        <Input
          svgSize={16}
          width="100%"
          height="35px"
          search={true}
          searchValue={searchWord}
          placeholder={"search"}
          handleChange={(e) => {
            actionSearch(e.target.value, page);
            setWord(e.target.value);
          }}
        />
      </SearchCon>

      <div className="result-panel" ref={heightRef} onScroll={handleScroll}>
        <CustomCases />
      </div>
    </SearchContainer>
  );
};

export default Search;
