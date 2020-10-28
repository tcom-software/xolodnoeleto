import React from "react";
import { SvgIcon } from "@famous";
import { connect } from "react-redux";

const TitleSection = ({
  e,
  type = "",
  openFromMains,
  setOpenFromMains,
  isMobile,
}) => {
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

      {type == "multiple-cases" && isMobile ? (
        <>
          <SvgIcon type={"arrowUp"} width={13} height={13} />
          <SvgIcon type={"arrowDown"} width={13} height={13} />
        </>
      ) : (
        <SvgIcon
          type={
            openFromMains.indexOf(e.enTitle) != -1 ? "arrowUp" : "arrowDown"
          }
          width={13}
          height={13}
        />
      )}
    </div>
  );
};

const mapStateToProps = ({ general: { isMobile } }) => ({
  isMobile,
});
export default connect(mapStateToProps)(TitleSection);
