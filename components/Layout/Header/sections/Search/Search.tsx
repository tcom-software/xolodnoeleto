import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input, Loading } from "@famous";
import { SearchCon } from "../../styles";
import { SearchContainer } from "./styles";
import { makePrice } from "@utils";

const Search = ({ searched, actionSearch, loading }) => {
  const [search, setSearch] = useState("");
  const { searchResponse, total } = searched;

  useEffect(() => {
    if (search == "") setSearch("");
  }, [search]);

  const MakeHtml = () => {
    if (loading) {
      return <Loading />;
    } else if (searchResponse !== undefined && searchResponse.length > 0) {
      return searched.searchResponse.map((e, i) => {
        const { id, brand, model, price } = e;
        return (
          <Link href={`/products/${id}`} key={id}>
            <a>
              <div className={"item-container"}>
                <div className={"title"}>
                  <p>{brand}</p>
                  <p>{model}</p>
                </div>
                <p>{makePrice(price)}</p>
              </div>
            </a>
          </Link>
        );
      });
    } else {
      return null;
    }
  };

  return (
    <SearchContainer>
      <SearchCon>
        <Input
          svgSize={16}
          width="100%"
          height="35px"
          search={true}
          searchValue={search}
          placeholder={"search"}
          handleChange={(e) => {
            actionSearch(e.target.value);
            setSearch(e.target.value);
          }}
        />
      </SearchCon>
      {(loading === false && searchResponse == undefined) ||
      (loading === false &&
        searchResponse != undefined &&
        searchResponse.length === 0) ? null : (
        <div className="result-panel">
          <MakeHtml />
        </div>
      )}
    </SearchContainer>
  );
};

export default Search;
