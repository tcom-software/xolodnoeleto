import React, { useEffect, useState } from "react";
import { SvgIcon } from "@famous";
import { useRouter } from "next/router";
import { FiltersContainer } from "./styles";
import FilterCase from "./content/FilterCase";
import ButtonLayout from "./content/ButtonLayout";
import { createUrlFromObject } from "@utils";

const Filters = ({ filters, getCatalogueFilters, selectedData, isMobile }) => {
  const router = useRouter();
  const { catalogueId } = router.query;
  useEffect(() => {
    const url = createUrlFromObject(selectedData, catalogueId);

    if (url.indexOf("?") != -1) {
      router.push(url);
    }
  }, [selectedData]);

  useEffect(() => {
    catalogueId && getCatalogueFilters(catalogueId);
  }, [catalogueId]);

  const [isOpen, setOpen] = useState(false);

  const MobileCloseFilters = () => (
    <div className="close-filters-mobile">
      <p>Очистить фильтр</p>
      <SvgIcon
        type="close"
        width={20}
        height={20}
        callback={() => {
          setOpen(!isOpen);
        }}
      />
    </div>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <FiltersContainer isOpen={isOpen}>
      <form onSubmit={handleSubmit}>
        <ButtonLayout>
          <div className="filters-info-container">
            <MobileCloseFilters />
            <div
              className={`mobile-trigger-button-container`}
              onClick={() => setOpen(!isOpen)}
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
            <MobileCloseFilters />
          </div>
        </ButtonLayout>
      </form>
    </FiltersContainer>
  );
};

export default Filters;
