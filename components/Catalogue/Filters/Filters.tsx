import React, { useState } from "react";
import Between from "./content/Between";
import { FiltersContainer } from "./styles";
import MultipleCases from "./content/MultipleCases";
import { Button } from "@atoms";

const Filters = ({ filters }) => {
  const [data, setData] = useState({});
  const [showMore, setMore] = useState(false);
  const [openFromSubs, setOpenFromSubs] = useState([]);
  const [openFromMains, setOpenFromMains] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({});
    console.log(11111);
  };

  return (
    <FiltersContainer>
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
          показать все фильтры
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
    </FiltersContainer>
  );
};

export default Filters;
