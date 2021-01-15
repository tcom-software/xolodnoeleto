import React, { useEffect } from "react";
import { SvgIcon } from "@famous";
import { useRouter } from "next/router";
import { FiltersContainer } from "./styles";
import FilterCase from "./content/FilterCase";
import ButtonLayout from "./content/ButtonLayout";
import { createUrlFromObject } from "@utils";
import MobileFiltersToggleButton from "./content/MobileFiltersToggleButton";

const Filters = ({
  isMobile,
  filters,
  selectedData,
  getCatalogFilters,
  isOpenFilters,
  filtersToggle,
}) => {
  const router = useRouter();
  const { catalogId } = router.query;

  useEffect(() => {
    if (catalogId !== undefined) {
      const url = createUrlFromObject(selectedData, catalogId);
      if (url.indexOf("?") != -1) {
        router.push(url);
      }
    }
  }, [selectedData, catalogId]);

  useEffect(() => {
    catalogId && getCatalogFilters(catalogId);
  }, [catalogId]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <FiltersContainer isOpen={isOpenFilters}>
      <form onSubmit={handleSubmit}>
        <ButtonLayout>
          <div className="filters-info-container">
            <MobileFiltersToggleButton>
              <div
                className={`mobile-trigger-button-container`}
                onClick={() => filtersToggle()}
              >
                <SvgIcon type="openFiltersMobile" width={25} height={25} />
                <p>Фильтры</p>
              </div>
              <div className={`filters-section`}>
                {Object.entries(filters).map(([key, value], i) => {
                  const type = value[0].name;
                  if (key === "Сортировка") {
                    if (isMobile)
                      return (
                        <FilterCase
                          key={i}
                          type={type}
                          title={key}
                          array={value}
                          maxShowFive={i}
                        />
                      );
                    else return null;
                  } else {
                    return (
                      <FilterCase
                        key={i}
                        type={type}
                        title={key}
                        array={value}
                        maxShowFive={i}
                      />
                    );
                  }
                })}
              </div>
            </MobileFiltersToggleButton>
          </div>
        </ButtonLayout>
      </form>
    </FiltersContainer>
  );
};

export default Filters;
