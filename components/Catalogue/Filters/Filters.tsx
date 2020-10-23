import React, { useState, useEffect } from "react";
import { CheckBox, SvgIcon } from "@atoms";
import { FiltersContainer } from "./styles";
import Slider, { Range } from "rc-slider";
import theme from "styles/theme";

const Filters = ({ filters }) => {
  const [openFromMains, setOpenFromMains] = useState([]);
  const [openFromSubs, setOpenFromSubs] = useState([]);
  const [data, setData] = useState({});

  const TitleSection = ({ e }) => {
    return (
      <div className="title">
        {e.ruTitle}
        <span></span>
        <SvgIcon
          type={
            openFromMains.indexOf(e.enTitle) != -1 ? "arrowUp" : "arrowDown"
          }
          width={15}
          height={15}
          callback={() => {
            const index = openFromMains.indexOf(e.enTitle);
            if (index === -1) {
              setOpenFromMains([e.enTitle, ...openFromMains]);
            } else {
              let newArray = openFromMains;
              newArray.splice(index, 1);
              setOpenFromMains([...newArray]);
            }
          }}
        />
      </div>
    );
  };

  return (
    <FiltersContainer>
      {Object.values(filters).map((e: any, i) => {
        if (e.type == "between") {
          return (
            <div key={e.id} className="between">
              <TitleSection e={e} />
              {openFromMains.indexOf(e.enTitle) != -1 ? (
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
              <TitleSection e={e} />
              {openFromMains.indexOf(e.enTitle) != -1 ? (
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
                          index <= 9
                            ? "first-view"
                            : openFromSubs.indexOf(e.enTitle) === -1
                            ? "second-view"
                            : ""
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
                  <p
                    className="show-more-show-less"
                    onClick={() => {
                      const index = openFromSubs.indexOf(e.enTitle);
                      if (index === -1) {
                        setOpenFromSubs([e.enTitle, ...openFromSubs]);
                      } else {
                        let newArray = openFromSubs;
                        newArray.splice(index, 1);
                        setOpenFromSubs([...newArray]);
                      }
                    }}
                  >
                    {e.values.length <= 9
                      ? ""
                      : openFromSubs.indexOf(e.enTitle) === -1
                      ? `Показать все (${e.values.length})`
                      : `Показать менше`}
                  </p>
                </div>
              ) : null}
            </div>
          );
        }
      })}
    </FiltersContainer>
  );
};

export default Filters;
