import React from "react";
import { FilterCaseContainer } from "./styles";
import ArrowRightSide from "./content/ArrowRightSide";
import MultipleSelectionCase from "./content/MultipleSelectionCase";
import Between from "./content/Between";

const FilterCase = ({
  type,
  title,
  array,
  maxShowFive,
  isOpenFilters,
  firstLevelFiltersArray,
}) => {
  const index = firstLevelFiltersArray.indexOf(title);

  const FilterSwitch = () => {
    switch (type) {
      case "file.select":
        return <MultipleSelectionCase array={array} title={title} />;
        break;
      case "between":
        return <Between array={array} title={title} />;
        break;
      default:
        return null;
    }
  };

  return (
    <FilterCaseContainer>
      <div
        className={`item-container ${
          maxShowFive < 5 ? "show" : isOpenFilters ? "show" : "hide"
        }`}
      >
        <div className="only-title-section">
          <span className="border-left-side"></span>
          <h3>{title}</h3>
          <ArrowRightSide title={title} />
        </div>
        <div
          className={`selection-container ${index === -1 ? "hide" : "show"}`}
        >
          <FilterSwitch />
        </div>
      </div>
    </FilterCaseContainer>
  );
};

export default FilterCase;
