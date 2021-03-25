import React from "react";

const SelectedLetters = ({ selected, setSelected }) => {
  return (
    <div className="selected-letters">
      {selected.map((e, i) => {
        return (
          <div
            key={i}
            className="selected-letter"
            onClick={() => {
              setSelected([...selected.filter((elem) => elem !== e)]);
            }}
          >
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default SelectedLetters;
