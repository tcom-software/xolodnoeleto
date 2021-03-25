import React from "react";
import { Star } from "@famous";
import { ReviewContainer } from "./styles";
import { ReviewInterface } from "interfaces";
import { Stars } from "../ProductGridView/styles";
import ShowMoreWrapper from "../ShowMoreWrapper";

const Review = ({ fullName, starCount, description }: ReviewInterface) => {
  return (
    <ReviewContainer>
      <div className="avatar">
        <img src={`/images/no_found/user.png`} alt={fullName} />
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
          padding="15px"
          buttonTextAlign="center"
          buttonText={["Читать ещё", "Закрыть"]}
        />
      </div>
    </ReviewContainer>
  );
};
export default Review;
