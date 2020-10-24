import React, { useState } from "react";
import Between from "./content/Between";
import { FiltersContainer } from "./styles";
import MultipleCases from "./content/MultipleCases";

const Filters = ({ filters }) => {
  const [data, setData] = useState({});
  const [openFromSubs, setOpenFromSubs] = useState([]);
  const [openFromMains, setOpenFromMains] = useState([]);

  console.log(data, "--------data");

  return (
    <FiltersContainer>
      {Object.values(filters).map((e: any, i) => {
        if (e.type == "between") {
          return (
            <Between
              key={e.id}
              e={e}
              data={data}
              setData={setData}
              openFromMains={openFromMains}
              setOpenFromMains={setOpenFromMains}
            />
          );
        } else if (e.type == "multipleCases") {
          return (
            <MultipleCases
              key={e.id}
              e={e}
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
    </FiltersContainer>
  );
};

export default Filters;
