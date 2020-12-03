import React, { useState } from "react";
import { SvgIcon } from "@famous";
import { FiltersContainer } from "./styles";
import FilterCase from "./content/FilterCase";
import ButtonLayout from "./content/ButtonLayout";

const Filters = ({ filters }) => {
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
                return (
                  <FilterCase
                    key={i}
                    type={type}
                    title={key}
                    array={value}
                    maxShowFive={i}
                  />
                );
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
