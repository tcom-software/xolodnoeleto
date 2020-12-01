import React from "react";
import { CheckBox, SvgIcon } from "@famous";
import { MultipleSelectionCaseContainer } from "./styles";
import theme from "styles/theme";

const MultipleSelectionCase = ({
  title,
  array,
  secondLevelFiltersArray,
  actionSecondFiltersLevelArray,
}) => {
  const myCase = false;
  const filterValues = secondLevelFiltersArray.indexOf(title);
  return (
    <MultipleSelectionCaseContainer filterValues={filterValues}>
      {array.map((e, i) => (
        <div
          key={i}
          className={`each-value ${
            i < 7 ? "show" : filterValues === -1 ? "hide" : "show"
          }`}
        >
          <CheckBox
            width="15px"
            height="15px"
            padding="2px"
            background="transparent"
            border={
              myCase
                ? `1px solid ${theme.body.primaryColor}`
                : `1px solid ${theme.body.someBorder}`
            }
            callback={() => {}}
          >
            {myCase ? (
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
      ))}
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
