import React from "react";

const Rating = ({ data, errorStyle, handleChange }) => {
  return (
    <div
      className={`rating-container ${errorStyle ? "add-review-rating" : ""}`}
    >
      <p>Оценка</p>
      <div className="rating">
        {Array.from(Array(5).keys()).map((e) => {
          const newE = e + 1;

          return (
            <span
              key={newE}
              onClick={() => {
                handleChange({ target: { value: newE } });
              }}
              className={newE == data.rating ? "active" : ""}
            >
              {newE}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Rating;
