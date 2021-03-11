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
  return (
    <SearchOptionsContainer ref={modalRef}>
      <div className="close-modal-search-option">
        <Button
          type="primary"
          width="100px"
          height="100%"
          onClick={() => setSelectedSearchCatalog(null)}
        >
          Очистить
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
            onClick={() => {
              if (selectedSearchCatalog === ids.join(",")) {
                setSelectedSearchCatalog({
                  ids: null,
                  title: null,
                });
              } else {
                setSelectedSearchCatalog({
                  ids: ids.join(","),
                  title: name,
                });
                closeModal("");
              }
            }}
            className={selectedSearchCatalog == ids.join(",") ? "selected" : ""}
          >
            {name}
          </Button>
        );
      })}
    </SearchOptionsContainer>
  );
};

export default SearchOptions;
