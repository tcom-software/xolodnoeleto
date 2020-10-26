import TitleSection from "./TitleSection";
import { Range } from "rc-slider";
import React from "react";

const Between = ({
  index,
  showMore,
  e,
  data,
  setData,
  openFromMains,
  setOpenFromMains,
}) => {
  return (
    <div
      key={e.id}
      className={`between ${
        index < 4 ? `showedFilters` : showMore ? "showedFilters" : "hideFilters"
      }`}
    >
      <TitleSection
        e={e}
        openFromMains={openFromMains}
        setOpenFromMains={setOpenFromMains}
      />
      {openFromMains.indexOf(e.enTitle) != -1 ? (
        <div className="show-hide-content">
          <div className="show-hide-content__from-to-and">
            <div>
              <input
                type="number"
                value={data[e.id].from}
                onChange={({ target: { value } }) =>
                  setData({
                    ...data,
                    [e.id]: { ...data[e.id], from: value },
                  })
                }
              />
              <span>От: </span>
            </div>

            <div>
              <input
                type="number"
                value={data[e.id] == undefined ? 0 : data[e.id].to}
                onChange={({ target: { value } }) =>
                  setData({
                    ...data,
                    [e.id]: { from: 0, ...data[e.id], to: value },
                  })
                }
              />
              <span>До: </span>
            </div>
          </div>
          <div className="show-hide-content__between-new-style">
            <Range
              min={0}
              max={9999999}
              allowCross={false}
              value={[
                data[e.id] === undefined ? 0 : data[e.id].from,
                data[e.id] === undefined ? 0 : data[e.id].to,
              ]}
              onChange={([from, to]) => {
                setData({
                  ...data,
                  [e.id]: { from, to },
                });
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Between;
