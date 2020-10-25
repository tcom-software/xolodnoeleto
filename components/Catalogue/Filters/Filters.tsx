import React, { useState } from "react";
import Between from "./content/Between";
import { FiltersContainer } from "./styles";
import MultipleCases from "./content/MultipleCases";
import { Button, SvgIcon } from "@atoms";

const Filters = ({ filters, isMobile }) => {
  const [mobileAvailableFilters, setMobileAvailableFilters] = useState(false);
  const [data, setData] = useState({});
  const [showMore, setMore] = useState(false);
  const [openFromSubs, setOpenFromSubs] = useState([]);
  const [openFromMains, setOpenFromMains] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const MobileFiltersToggle = () => (
    <div
      className="mobile-filters-toggle"
      onClick={() => setMobileAvailableFilters(!mobileAvailableFilters)}
    >
      <div className="container">
        {mobileAvailableFilters ? (
          `Закрыть фильтры`
        ) : (
          <>
            <SvgIcon type="openFiltersMobile" width={25} height={25} /> Фильтры
          </>
        )}
      </div>
    </div>
  );

  const FiltersHtml = () => (
    <form onSubmit={handleSubmit}>
      <Button
        type={"secondary"}
        color="#565656"
        width={"199px"}
        height={"47px"}
      >
        Очистить фильтр
      </Button>

      {Object.values(filters).map((e: any, i) => {
        if (e.type == "between") {
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
      >
        Очистить фильтр
      </Button>
    </form>
  );

  return (
    <FiltersContainer>
      {isMobile ? <MobileFiltersToggle /> : null}
      {isMobile && mobileAvailableFilters ? (
        <FiltersHtml />
      ) : !isMobile ? (
        <FiltersHtml />
      ) : null}
    </FiltersContainer>
  );
};

export default Filters;
