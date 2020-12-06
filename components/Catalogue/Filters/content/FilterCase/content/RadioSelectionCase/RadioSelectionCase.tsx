import React from "react";
import { SvgIcon } from "@famous";
import { RadioSelectionCaseContainer } from "./styles";

const RadioSelectionCase = ({
  array,
  title,
  selectedData,
  actionManipulationRadio,
}) => {
  const { radio } = selectedData;
  return (
    <RadioSelectionCaseContainer>
      {array.map((e) => {
        let selected;
        const { id, characteristic_id, name, name_ru, title } = e;

        if (
          radio &&
          radio[characteristic_id] &&
          radio[characteristic_id].includes(id)
        ) {
          selected = true;
        } else {
          selected = false;
        }
        return (
          <div
            key={id}
            className="radio-item"
            onClick={() => actionManipulationRadio({ characteristic_id, id })}
          >
            <p>{e.name_ru}</p>
            {selected ? (
              <SvgIcon type={"checkedRadioArrow"} width={20} height={20} />
            ) : null}
          </div>
        );
      })}
    </RadioSelectionCaseContainer>
  );
};

export default RadioSelectionCase;
