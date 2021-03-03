import React from "react";
import theme from "styles/theme";
import { Button, SvgIcon } from "@famous";
import { SearchOptionsContainer } from "./styles";

const SearchOptions = ({
  modalRef,
  lastLevelCatalogItems,
  closeModal,
  selectedSearchCatalog,
  setSelectedSearchCatalog,
}) => {
  if (lastLevelCatalogItems) {
    return (
      <SearchOptionsContainer ref={modalRef}>
        <div className="close-modal-search-option">
          <Button
            type="primary"
            width="100px"
            height="100%"
            onClick={() => setSelectedSearchCatalog(null)}
          >
            Clear
          </Button>
          <SvgIcon
            type="close"
            width="15px"
            height="15px"
            callback={closeModal}
          />
        </div>
        {lastLevelCatalogItems.map(({ ids, name }) => {
          return (
            <Button
              key={ids.join(",")}
              type="primary"
              width="175px"
              height="30px"
              onClick={() => setSelectedSearchCatalog(ids.join(","))}
            >
              {selectedSearchCatalog == ids.join(",") ? (
                <SvgIcon
                  type="star"
                  width="15px"
                  height="15px"
                  fill={theme.body.sunColor}
                  className="selected-catalog-with-star"
                />
              ) : null}

              {name}
            </Button>
          );
        })}
      </SearchOptionsContainer>
    );
  }
  return null;
};

export default SearchOptions;
