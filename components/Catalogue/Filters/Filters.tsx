import React from "react";
import { FiltersContainer } from "./styles";
import ButtonLayout from "./content/ButtonLayout";
import FilterCase from "./content/FilterCase";

const Filters = ({ filters }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <FiltersContainer>
      <form onSubmit={handleSubmit}>
        <ButtonLayout>
          <div className="filters-info-container">
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
        </ButtonLayout>
      </form>
    </FiltersContainer>
  );
};

export default Filters;
