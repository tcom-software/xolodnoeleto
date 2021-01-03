import React from "react";
import { SvgIcon } from "@famous";
import { Scroll } from "@utils";

const MobileCloseFilters = ({
  setOpen,
  isOpen,
  children,
  isMobile,
  mobileFiltersStatus,
  changeMobileFiltersStatus,
}) => {
  const { To } = Scroll;
  if (!isMobile) {
    return children;
  } else {
    return (
      <>
        <div
          className="close-filters-mobile"
          onClick={() => {
            setOpen(!isOpen);
            changeMobileFiltersStatus();
          }}
        >
          <p>Очистить фильтр</p>
          <SvgIcon type="close" width={20} height={20} />
        </div>
        {children}
        <div
          className="close-filters-mobile"
          onClick={() => {
            if (mobileFiltersStatus) {
              To("default");
              setOpen(!isOpen);
              changeMobileFiltersStatus();
            } else {
              changeMobileFiltersStatus();
            }
          }}
        >
          {!mobileFiltersStatus ? (
            <p>Показать больше фильтров</p>
          ) : (
            <>
              <p>Очистить фильтр</p>
              <SvgIcon type="close" width={20} height={20} />
            </>
          )}
        </div>
      </>
    );
  }
};

export default MobileCloseFilters;
