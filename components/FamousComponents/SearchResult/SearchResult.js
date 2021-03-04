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
  selectedSearchCatalogTitle,
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
        <Input
          svgSize={16}
          width="100%"
          height="35px"
          search={true}
          callback={callback}
          openModal={openModal}
          placeholder={"search"}
          onFocus={() => whereWasSearchAction(where)}
          selectedSearchCatalogTitle={selectedSearchCatalogTitle}
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
