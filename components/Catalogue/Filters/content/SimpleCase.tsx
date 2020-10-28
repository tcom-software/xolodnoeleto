import TitleSection from "./TitleSection";
import React from "react";
import { SvgIcon } from "@famous";

const SimpleCase = ({
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
      className={`simple-cases ${
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
          {e.values.map((element) => {
            return (
              <p
                key={element.id}
                onClick={() => {
                  setData({
                    ...data,
                    [e.id]: element.id,
                  });
                }}
                className={`simple-case-p ${
                  data[e.id] === element.id ? "active" : ""
                }`}
              >
                <span>{element.name}</span>
                {element.id === data[e.id] ? (
                  <SvgIcon type={"narrowArrow"} width={20} height={20} />
                ) : null}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SimpleCase;
