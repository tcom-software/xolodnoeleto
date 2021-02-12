import React, { useEffect } from "react";
import { SvgIcon } from "@famous";
import { Scroll } from "@utils";

const MobileCloseFilters = ({
  children,
  isMobile,
  isOpenFilters,
  filtersToggle,
  mobileFiltersStatus,
  changeMobileFiltersStatus,
  clearFiltersSelectedData,
}) => {
  const { To } = Scroll;
  if (!isOpenFilters && !mobileFiltersStatus) {
    return children;
  } else {
    return (
      <>
        <div className="close-filters-mobile">
          <p
            onClick={() => {
              clearFiltersSelectedData();
            }}
          >
            Очистить фильтр
          </p>
          <p
            onClick={() => {
              filtersToggle();
              changeMobileFiltersStatus();
            }}
          >
            Закрыть
          </p>
        </div>
        {children}
        <div className="close-filters-mobile">
          {!mobileFiltersStatus ? (
            <p
              onClick={() => {
                changeMobileFiltersStatus();
              }}
            >
              Показать больше фильтров
            </p>
          ) : (
            <>
              <p
                onClick={() => {
                  clearFiltersSelectedData();
                }}
              >
                Очистить фильтр
              </p>
              <p
                onClick={() => {
                  To("default");
                  filtersToggle();
                  changeMobileFiltersStatus();
                }}
              >
                Закрыть
              </p>
            </>
          )}
        </div>
      </>
    );
  }
};

export default MobileCloseFilters;
