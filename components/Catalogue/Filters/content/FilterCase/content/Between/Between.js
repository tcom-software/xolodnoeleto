import React from "react";
import { Range } from "rc-slider";
import { useRouter } from "next/router";
import { BetweenSelectionCaseContainer } from "./styles";

const Between = ({ title, array, selectedData, actionManipulationBetween }) => {
  const { id } = array[0];
  const router = useRouter();
  const { fromTo } = selectedData;

  const from =
    fromTo && fromTo[id] ? (fromTo[id][0] !== null ? fromTo[id][0] : 0) : 0;
  const to =
    fromTo && fromTo[id] ? (fromTo[id][1] !== null ? fromTo[id][1] : 0) : 0;

  return (
    <BetweenSelectionCaseContainer>
      <div className="show-hide-content">
        <div className="show-hide-content__from-to-and">
          <div>
            <span>От: </span>
            <input
              type="number"
              value={from}
              readOnly={true}
              onChange={({ target: { value } }) => {
                let parsed;
                if (value) parsed = parseInt(value);
                else parsed = 0;

                actionManipulationBetween({
                  id,
                  from: parsed,
                  to,
                  router,
                  selectedData,
                });
              }}
            />
          </div>
          <div>
            <span>До: </span>
            <input
              type="number"
              value={to}
              readOnly={true}
              onChange={({ target: { value } }) => {
                let parsed;
                if (value) parsed = parseInt(value);
                else parsed = 0;

                actionManipulationBetween({
                  id,
                  from,
                  to: parsed,
                  router,
                  selectedData,
                });
              }}
            />
          </div>
        </div>
        <div className="show-hide-content__between-new-style">
          <Range
            min={0}
            max={2000000}
            allowCross={false}
            value={[from, to]}
            onChange={([from, to]) => {
              setTimeout(function () {
                actionManipulationBetween({
                  id,
                  from,
                  to,
                  router,
                  selectedData,
                });
              });
            }}
          />
        </div>
      </div>
    </BetweenSelectionCaseContainer>
  );
};

export default Between;
