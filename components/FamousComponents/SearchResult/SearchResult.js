import React, { useEffect, useRef, useState } from "react";
import { Input } from "@famous";
import theme from "styles/theme";
import { useRouter } from "next/router";
import { SearchContainer } from "./styles";
import { Button, SvgIcon } from "../index";
import CustomCases from "./components/CustomCases";
import { SearchCon } from "../../Layout/Header/styles";

const SearchResult = ({
  where,
  loading,
  products,
  openModal,
  new_loading,
  refForSearch,
  actionSearch,
  products_info,
  whereWasSearch,
  searchInputValue,
  setNewRefForSearch,
  whereWasSearchAction,
  selectedSearchCatalog,
  searchInputValueAction,
  getCatalogProductsWithoutAxios,
  getCatalogProductLoadingTrigger,
}) => {
  const router = useRouter();
  const { total } = products_info;
  const heightRef = useRef(null);
  const [page, setPage] = useState(1);
  const handleScroll = () => {
    const { clientHeight, scrollHeight, scrollTop } = heightRef.current;
    const result = scrollHeight - scrollTop === clientHeight;
    if (result) {
      if (total > page * 15) {
        actionSearch({
          searchWord: searchInputValue,
          page: page + 1,
          selectedSearchCatalog,
        });
        setPage(page + 1);
      }
    }
  };
  useEffect(() => {
    const time = setTimeout(() => {
      searchInputValue &&
        actionSearch({
          searchWord: searchInputValue,
          page: 1,
          selectedSearchCatalog,
        });
    }, 500);

    return () => {
      clearTimeout(time);
    };
  }, [searchInputValue]);

  let callback = () => {};
  if (selectedSearchCatalog && searchInputValue) {
    callback = () => {
      router.push("/search/" + selectedSearchCatalog.replace(/,/gi, "-"));
      getCatalogProductsWithoutAxios({ products, products_info });
    };
  }

  return (
    <SearchContainer
      ref={whereWasSearch === where ? refForSearch : null}
      searchLength={products.length > 0 || loading || new_loading}
      onClick={(event) => {
        setNewRefForSearch({ current: event.currentTarget });
      }}
    >
      <SearchCon>
        <Button
          width="20px"
          height="100%"
          type="second"
          className="menuButtonPoints"
          onClick={() => openModal("SearchOptions")}
        >
          {typeof selectedSearchCatalog === "string" ? (
            <SvgIcon
              type="star"
              width="10px"
              height="10px"
              color={theme.body.sunColor}
              className="we-have-selected-catalog"
            />
          ) : null}
          <SvgIcon
            type={"menuVerticalPoints"}
            width="20px"
            height="100%"
            color="#777"
            className="menu-vertical-points"
          />
        </Button>
        <Input
          svgSize={16}
          width="100%"
          height="35px"
          search={true}
          callback={callback}
          placeholder={"search"}
          onFocus={() => whereWasSearchAction(where)}
          handleChange={(e) => searchInputValueAction(e.target.value)}
          searchValue={whereWasSearch === where ? searchInputValue : ""}
        />
      </SearchCon>
      {whereWasSearch === where && searchInputValue != "" ? (
        <div className="result-panel" ref={heightRef} onScroll={handleScroll}>
          {total ? (
            <h2 className="title">Количество продуктов ({total})</h2>
          ) : null}
          <CustomCases
            where={where}
            loading={loading}
            products={products}
            new_loading={new_loading}
            actionSearch={actionSearch}
            searchInputValue={searchInputValue}
            searchInputValueAction={searchInputValueAction}
          />
        </div>
      ) : null}
    </SearchContainer>
  );
};

export default SearchResult;
