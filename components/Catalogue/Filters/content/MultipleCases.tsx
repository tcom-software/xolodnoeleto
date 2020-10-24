import TitleSection from "./TitleSection";
import { CheckBox, SvgIcon } from "@atoms";
import theme from "../../../../styles/theme";
import React from "react";

const MultipleCases = ({
  e,
  data,
  openFromSubs,
  setData,
  setOpenFromSubs,
  openFromMains,
  setOpenFromMains,
}) => {
  return (
    <div className="multiple-cases" key={e.id}>
      <TitleSection
        e={e}
        openFromMains={openFromMains}
        setOpenFromMains={setOpenFromMains}
      />
      {openFromMains.indexOf(e.enTitle) != -1 ? (
        <div className="show-hide-content">
          {e.values.map((element, index) => {
            const myCase =
              data[e.id] == undefined
                ? false
                : data[e.id].indexOf(element.id) == -1
                ? false
                : true;

            return (
              <div
                key={element.id}
                className={`checkbox-name-container ${
                  index <= 9
                    ? "first-view"
                    : openFromSubs.indexOf(e.enTitle) === -1
                    ? "second-view"
                    : ""
                }`}
                onClick={() => {
                  if (data[e.id] === undefined) {
                    setData({
                      ...data,
                      [e.id]: [element.id],
                    });
                  } else {
                    const foundIndex = data[e.id].indexOf(element.id);
                    if (foundIndex === -1) {
                      setData({
                        ...data,
                        [e.id]: [...data[e.id], element.id],
                      });
                    } else {
                      let newArray = data[e.id];
                      newArray.splice(foundIndex, 1);
                      setData({
                        ...data,
                        [e.id]: [...newArray],
                      });
                    }
                  }
                }}
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
};

export default MultipleCases;
