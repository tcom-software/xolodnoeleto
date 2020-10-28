import React, { useState } from "react";
import { Button, SvgIcon } from "@famous";
import Between from "./content/Between";
import { FiltersContainer } from "./styles";
import MultipleCases from "./content/MultipleCases";
import SimpleCase from "./content/SimpleCase";

const Filters = ({ filters, isMobile }) => {
  const [mobileAvailableFilters, setMobileAvailableFilters] = useState(false);
  const [data, setData] = useState({});

  const [showMore, setMore] = useState(false);
  const [openFromSubs, setOpenFromSubs] = useState([]);
  const [openFromMains, setOpenFromMains] = useState([]);

  const MobileFiltersToggle = () => (
    <div
      className="mobile-filters-toggle"
      onClick={() => setMobileAvailableFilters(!mobileAvailableFilters)}
    >
      <div className={`container ${mobileAvailableFilters ? "active" : ""}`}>
        {mobileAvailableFilters ? (
          <>
            <p>Очистить фильтр</p>
            <SvgIcon type="close" width={20} height={20} color={"#202020"} />
          </>
        ) : (
          <>
            <SvgIcon type="openFiltersMobile" width={25} height={25} /> Фильтры
          </>
        )}
      </div>
    </div>
  );

  return (
    <FiltersContainer
      isMobile={isMobile}
      mobileAvailableFilters={mobileAvailableFilters}
    >
      {isMobile ? <MobileFiltersToggle /> : null}
      <div className="form">
        {!isMobile ? (
          <Button
            type={"secondary"}
            color="#565656"
            width={"199px"}
            height={"47px"}
            onClick={() => setData({})}
          >
            Очистить фильтр
          </Button>
        ) : null}

        {Object.values(filters).map((e: any, i) => {
          if (e.type == "simpleCases") {
            return (
              <SimpleCase
                index={i}
                showMore={showMore}
                e={e}
                data={data}
                setData={setData}
                openFromMains={openFromMains}
                setOpenFromMains={setOpenFromMains}
              />
            );
          } else if (e.type == "between") {
            return (
              <Between
                index={i}
                showMore={showMore}
                e={e}
                key={e.id}
                data={data}
                setData={setData}
                openFromMains={openFromMains}
                setOpenFromMains={setOpenFromMains}
              />
            );
          } else if (e.type == "multipleCases") {
            return (
              <MultipleCases
                index={i}
                showMore={showMore}
                e={e}
                key={e.id}
                data={data}
                setData={setData}
                openFromSubs={openFromSubs}
                setOpenFromSubs={setOpenFromSubs}
                openFromMains={openFromMains}
                setOpenFromMains={setOpenFromMains}
              />
            );
          }
        })}

        {!isMobile ? (
          <>
            <Button
              type={"with-icon"}
              width={"199px"}
              height={"47px"}
              onClick={() => setMore(!showMore)}
            >
              {showMore ? `Закрыть` : `Показать все фильтры`}
            </Button>
            <Button
              type={"secondary"}
              color="#565656"
              width={"199px"}
              height={"47px"}
              onClick={() => setData({})}
            >
              Очистить фильтр
            </Button>
          </>
        ) : null}
      </div>
    </FiltersContainer>
  );
};

export default Filters;
