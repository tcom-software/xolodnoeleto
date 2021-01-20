import React from "react";
import theme from "styles/theme";
import { CheckBox, SvgIcon } from "@famous";
import { MultipleSelectionCaseContainer } from "./styles";

const MultipleSelectionCase = ({
  title,
  array,
  selectedData,
  secondLevelFiltersArray,
  actionSecondFiltersLevelArray,
  actionManipulationMultiple,
}) => {
  const { checkboxes, manufacturerCountries } = selectedData;
  const filterValues = secondLevelFiltersArray.indexOf(title);

  return (
    <MultipleSelectionCaseContainer filterValues={filterValues}>
      {array.map((e, i) => {
        const id = e.id;
        const parent_id = e.characteristic_id;

        let selected;
        if (parent_id === "manufacturerCountries" && manufacturerCountries) {
          selected = manufacturerCountries.includes(id) ? true : false;
        } else if (checkboxes && checkboxes[parent_id]) {
          selected = checkboxes[parent_id].includes(id) ? true : false;
        }

        return (
          <div
            key={i}
            className={`each-value ${
              i < 7 ? "show" : filterValues === -1 ? "hide" : "show"
            }`}
            onClick={() => {
              actionManipulationMultiple({
                id,
                parent_id,
              });
            }}
          >
            <CheckBox
              width="15px"
              height="15px"
              padding="2px"
              background="transparent"
              border={
                selected
                  ? `1px solid ${theme.body.primaryColor}`
                  : `1px solid ${theme.body.someBorder}`
              }
              callback={() => {}}
            >
              {selected ? (
                <SvgIcon
                  type="checkedRadioArrow"
                  width={35}
                  height={22}
                  color={theme.body.primaryColor}
                />
              ) : null}
            </CheckBox>
            <p className="value"> {e.name_ru} </p>
          </div>
        );
      })}
      {array.length > 7 ? (
        <div
          className="show-more-filters-each"
          onClick={() => actionSecondFiltersLevelArray(title)}
        >
          {filterValues !== -1 ? `Закрыть` : `Показать все (${array.length})`}
        </div>
      ) : null}
    </MultipleSelectionCaseContainer>
  );
};

export default MultipleSelectionCase;
