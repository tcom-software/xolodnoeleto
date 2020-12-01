import React from "react";
import { Range } from "rc-slider";

const Between = ({ array, title }) => {
  return (
    <div className={`between`}>
      <div className="show-hide-content">
        <div className="show-hide-content__from-to-and">
          <div>
            <input
              type="number"
              // value={data[e.id] == undefined ? 0 : data[e.id].from}
            />
            <span>От: </span>
          </div>

          <div>
            <input
              type="number"
              // value={data[e.id] == undefined ? 0 : data[e.id].to}
            />
            <span>До: </span>
          </div>
        </div>
        <div className="show-hide-content__between-new-style">
          <Range
            min={0}
            max={2000000}
            allowCross={false}
            // value={[
            //   data[e.id] === undefined ? 0 : data[e.id].from,
            //   data[e.id] === undefined ? 0 : data[e.id].to,
            // ]}
            // onChange={([from, to]) => {
            //   setData({
            //     ...data,
            //     [e.id]: { from, to },
            //   });
            // }}
          />
        </div>
      </div>
    </div>
  );
};

export default Between;
