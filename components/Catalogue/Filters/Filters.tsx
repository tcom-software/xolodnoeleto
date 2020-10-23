import React, { useState, useEffect } from "react";
import { CheckBox, SvgIcon } from "@atoms";
import { FiltersContainer } from "./styles";
import Slider, { Range } from "rc-slider";
import theme from "styles/theme";

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
                <div className="show-hide-content">
                  <div className="show-hide-content__from-to-and">
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
                  <div className="show-hide-content__between-new-style">
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
          return (
            <div className="multiple-cases" key={e.id}>
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

              <div className="show-hide-content">
                {e.values.map((element, index) => {
                  const myCase =
                    data[e.id] == undefined
                      ? false
                      : data[e.id][element.id] == undefined
                      ? false
                      : true;

                  return (
                    <div
                      className={`checkbox-name-container ${
                        index <= 9 ? "first-screen" : "second-view"
                      }`}
                      key={element.id}
                    >
                      <CheckBox
                        width="15px"
                        height="15px"
                        padding="2px"
                        background="transparent"
                        callback={() => {}}
                        border={
                          myCase
                            ? `1px solid ${theme.body.primaryColor}`
                            : `1px solid ${theme.body.someBorder}`
                        }
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
                      <p>{element.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }
      })}
    </FiltersContainer>
  );
};

export default Filters;
