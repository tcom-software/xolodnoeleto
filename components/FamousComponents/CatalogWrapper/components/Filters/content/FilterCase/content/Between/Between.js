import React, { useEffect, useState } from "react";
import { Range } from "rc-slider";
import { useRouter } from "next/router";
import { BetweenSelectionCaseContainer } from "./styles";

const Between = ({ title, array, selectedData, actionManipulationBetween }) => {
  const { fromTo } = selectedData;
  const [myObj, setMyObj] = useState([null, null]);
  const { id } = array[0];
  const router = useRouter();
  const [from, to] = myObj;

  const data = function (from = "", to = "") {
    actionManipulationBetween({
      id,
      from,
      to,
      router,
      selectedData,
    });
  };

  useEffect(() => {
    if ((from && !fromTo) || (to && !fromTo)) {
      setMyObj([null, null]);
    }
  }, [fromTo]);

  useEffect(() => {
    if (fromTo && fromTo[id]) {
      setMyObj([fromTo[id][0], fromTo[id][1]]);
    }
  }, [selectedData]);

  useEffect(() => {
    if ((!fromTo && from) || (!fromTo && to)) {
      const timer = setTimeout(() => data(from, to), 1000);
      return () => clearTimeout(timer);
    } else {
      if (
        (fromTo === undefined && from === null && to === null) ||
        (fromTo && fromTo[id] === undefined && from === null && to === null) ||
        (fromTo && JSON.stringify(fromTo[id]) === JSON.stringify(myObj))
      ) {
      } else {
        const timer = setTimeout(() => data(from, to), 1000);
        return () => clearTimeout(timer);
      }
    }
  }, [myObj]);

  const RangeDOM = () => {
    if (fromTo && fromTo[id] && !from && !to) {
      /**
       *
       *   I added this case here because was a bug,
       *   if selected some filters with the type Between then open or close other filters,
       *   appears bug. the First selected value of all filters with the type between a show looks like 0
       *
       * * */
      return null;
    } else {
      return (
        <Range
          min={0}
          max={2000000}
          allowCross={false}
          value={[from, to]}
          onChange={([from, to]) => {
            setMyObj([from, to]);
          }}
        />
      );
    }
  };

  return (
    <BetweenSelectionCaseContainer>
      <div className="show-hide-content">
        <div className="show-hide-content__from-to-and">
          <div>
            <span>От: </span>
            <input
              type="number"
              value={from === null ? "" : from}
              onChange={({ target: { value } }) => {
                let parsed;
                if (value) parsed = parseInt(value);
                else parsed = "";
                setMyObj([parsed, to]);
              }}
            />
          </div>
          <div>
            <span>До: </span>
            <input
              type="number"
              value={to === null ? "" : to}
              onChange={({ target: { value } }) => {
                let parsed;
                if (value) parsed = parseInt(value);
                else parsed = "";
                setMyObj([from, parsed]);
              }}
            />
          </div>
        </div>
        <div className="show-hide-content__between-new-style">{RangeDOM()}</div>
      </div>
    </BetweenSelectionCaseContainer>
  );
};

export default Between;
