import React, { useState, useEffect } from "react";
import { FiltersContainer } from "./styles";
import { SvgIcon } from "@atoms";

const Filters = ({ filters }) => {
  const [needOpen, setNeedOpen] = useState([]);

  return (
    <FiltersContainer>
      {Object.values(filters).map((e: any, i) => {
        if (e.type == "between") {
          return (
            <div className="between">
              <div className="title">
                {e.title}
                <span></span>
                <SvgIcon
                  type={
                    needOpen.indexOf(e.title) != -1 ? "arrowUp" : "arrowDown"
                  }
                  width={15}
                  height={15}
                  callback={() => {
                    const index = needOpen.indexOf(e.title);
                    if (index === -1) {
                      setNeedOpen([e.title, ...needOpen]);
                    } else {
                      let newArray = needOpen;
                      newArray.splice(index, 1);
                      setNeedOpen([...newArray]);
                    }
                  }}
                />
              </div>
              {needOpen.indexOf(e.title) != -1 ? (
                <div className="show_hide_content">
                  <div className="show_hide_content__from-to-and">
                    <input type="number" placeholder="от" />
                    <input type="number" placeholder="до" />
                  </div>
                  <div className="show_hide_content__between-new-style">
                    kjhkjhkjhkjh
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
