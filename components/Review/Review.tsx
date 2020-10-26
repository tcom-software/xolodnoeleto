import { ReviewContainer } from "./styles";
import { Star } from "@atoms";
import { Stars } from "../ProductGridView/styles";
import React, { useState } from "react";
import ShowMoreWrapper from "../ShowMoreWrapper";

const Review = ({ avatarPath, fullName, starCount, description }) => {
  const [showMore, setMore] = useState(false);

  return (
    <ReviewContainer>
      <div className="avatar">
        <img src={`/images/review/${avatarPath}`} alt={fullName} />
      </div>
      <div className="stars">
        <Stars>
          {Array.from(Array(5).keys()).map((e, i) => {
            return <Star key={i} item={i} selected={starCount} />;
          })}
        </Stars>
      </div>
      <div className="full-name">{fullName}</div>
      <div className="description">
        <ShowMoreWrapper
          color="#5B5B5B"
          text={description}
          fromHeight={90}
          border={"none"}
          svgShow={false}
          buttonStyle={true}
          buttonText={["Читать ещё", "Закрыть"]}
        />
      </div>
    </ReviewContainer>
  );
};
export default Review;
