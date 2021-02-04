import React from "react";
import Between from "./content/Between";
import { FilterCaseContainer } from "./styles";
import ArrowRightSide from "./content/ArrowRightSide";
import MultipleSelectionCase from "./content/MultipleSelectionCase";
import RadioSelectionCase from "./content/RadioSelectionCase";

const FilterCase = ({
  type,
  title,
  array,
  isMobile,
  maxShowFive,
  isOpenFilters,
  mobileFiltersStatus,
  firstLevelFiltersArray,
  actionFirstFiltersLevelArray,
}) => {
  const index = firstLevelFiltersArray.indexOf(title);
  const FilterSwitch = () => {
    switch (type) {
      case "file.select":
        // Radio Checkbox
        return <MultipleSelectionCase array={array} title={title} />;
        break;
      case "file.checkbox":
        // Radio Selection
        return <RadioSelectionCase array={array} title={title} />;
        break;
      case "file.fromTo":
        return <Between array={array} title={title} />;
        break;
      default:
        return null;
    }
  };

  let className = "";
  if (isMobile) {
    if (mobileFiltersStatus) {
      className = "show";
    } else if (maxShowFive < 8 && isOpenFilters) {
      className = "show";
    } else {
      className = "hide";
    }
  } else {
    if (isOpenFilters) {
      className = "show";
    } else if (maxShowFive < 8 && !isOpenFilters) {
      className = "show";
    } else {
      className = "hide";
    }
  }

  return (
    <FilterCaseContainer>
      <div className={`item-container ${className}`}>
        <div
          className="only-title-section"
          onClick={() => actionFirstFiltersLevelArray(title)}
        >
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
