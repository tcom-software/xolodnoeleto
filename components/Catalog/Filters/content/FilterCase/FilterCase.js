import React, { useState } from "react";
import { FilterCaseContainer } from "./styles";
import ArrowRightSide from "./content/ArrowRightSide";
import MultipleSelectionCase from "./content/MultipleSelectionCase";
import RadioSelectionCase from "./content/RadioSelectionCase";
import Between from "./content/Between";
import { Scroll } from "@utils";

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
  const { Link } = Scroll;
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

  return (
    <FilterCaseContainer>
      <div
        className={`item-container ${
          maxShowFive < 5
            ? "show"
            : isOpenFilters
            ? "show"
            : isMobile
            ? mobileFiltersStatus
              ? "show"
              : "hide"
            : "show"
        }`}
      >
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
          {/*<Link to="default">*/}
          <FilterSwitch />
          {/*</Link>*/}
        </div>
      </div>
    </FilterCaseContainer>
  );
};

export default FilterCase;
