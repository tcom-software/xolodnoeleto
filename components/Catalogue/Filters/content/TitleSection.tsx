import { SvgIcon } from "@atoms";
import React from "react";

const TitleSection = ({ e, openFromMains, setOpenFromMains }) => {
  return (
    <div className="title">
      {e.ruTitle}
      <span></span>
      <SvgIcon
        type={openFromMains.indexOf(e.enTitle) != -1 ? "arrowUp" : "arrowDown"}
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

export default TitleSection;
