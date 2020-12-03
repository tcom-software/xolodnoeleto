import React from "react";
import { Range } from "rc-slider";
import { BetweenSelectionCaseContainer } from "./styles";

const Between = ({
  title,
  selectedData: { fromTo },
  actionManipulationBetween,
}) => {
  const from = fromTo && fromTo[title] ? fromTo[title].from : 0;
  const to = fromTo && fromTo[title] ? fromTo[title].to : 0;

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

                actionManipulationBetween({ title, from: parsed, to });
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

                actionManipulationBetween({ title, from, to: parsed });
              }}
            />
          </div>
        </div>
        <div className="show-hide-content__between-new-style">
          <Range
            min={0}
            max={2000000}
            allowCross={false}
            value={[
              fromTo && fromTo[title] ? fromTo[title].from : 0,
              fromTo && fromTo[title] ? fromTo[title].to : 0,
            ]}
            onChange={([from, to]) => {
              setTimeout(function () {
                actionManipulationBetween({ title, from, to });
              });
            }}
          />
        </div>
      </div>
    </BetweenSelectionCaseContainer>
  );
};

export default Between;
