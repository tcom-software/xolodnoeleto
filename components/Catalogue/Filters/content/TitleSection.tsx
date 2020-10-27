import React from "react";
import { SvgIcon } from "@famous";

const TitleSection = ({ e, openFromMains, setOpenFromMains }) => {
  return (
    <div
      className="title"
      onClick={() => {
        const index = openFromMains.indexOf(e.enTitle);
        if (index === -1) {
          setOpenFromMains([e.enTitle, ...openFromMains]);
        } else {
          let newArray = openFromMains;
          newArray.splice(index, 1);
          setOpenFromMains([...newArray]);
        }
      }}
    >
      <p>{e.ruTitle}</p>
      <span></span>
      <SvgIcon
        type={openFromMains.indexOf(e.enTitle) != -1 ? "arrowUp" : "arrowDown"}
        width={15}
        height={15}
      />
    </div>
  );
};

export default TitleSection;
