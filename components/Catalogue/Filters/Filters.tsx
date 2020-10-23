import React, { useState, useEffect } from "react";
import { SvgIcon } from "@atoms";
import { FiltersContainer } from "./styles";
import Slider, { Range } from "rc-slider";

const Filters = ({ filters }) => {
  const [needOpen, setNeedOpen] = useState([]);
  const [data, setData] = useState({});

  return (
    <FiltersContainer>
      {Object.values(filters).map((e: any, i) => {
        if (e.type == "between") {
          return (
            <div key={e.id} className="between">
              <div className="title">
                {e.ruTitle}
                <span></span>
                <SvgIcon
                  type={
                    needOpen.indexOf(e.enTitle) != -1 ? "arrowUp" : "arrowDown"
                  }
                  width={15}
                  height={15}
                  callback={() => {
                    const index = needOpen.indexOf(e.enTitle);
                    if (index === -1) {
                      setNeedOpen([e.enTitle, ...needOpen]);
                    } else {
                      let newArray = needOpen;
                      newArray.splice(index, 1);
                      setNeedOpen([...newArray]);
                    }
                  }}
                />
              </div>
              {needOpen.indexOf(e.enTitle) != -1 ? (
                <div className="show_hide_content">
                  <div className="show_hide_content__from-to-and">
                    <input
                      type="number"
                      placeholder="от"
                      value={data[e.id] == undefined ? 0 : data[e.id].from}
                      onChange={({ target: { value } }) =>
                        setData({
                          ...data,
                          [e.id]: { to: 0, ...data[e.id], from: value },
                        })
                      }
                    />
                    <input
                      type="number"
                      placeholder="до"
                      value={data[e.id] == undefined ? 0 : data[e.id].to}
                      onChange={({ target: { value } }) =>
                        setData({
                          ...data,
                          [e.id]: { from: 0, ...data[e.id], to: value },
                        })
                      }
                    />
                  </div>
                  <div className="show_hide_content__between-new-style">
                    <Range
                      min={0}
                      max={9999999}
                      allowCross={false}
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
        } else if (e.type == "multipleCases") {
          return null;
          return <div className="multiple-cases">multipleCases</div>;
        }
      })}
    </FiltersContainer>
  );
};

export default Filters;
