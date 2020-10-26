import { ReviewListContainer } from "./styles";
import React from "react";
import Review from "../Review";
import Slider from "react-slick";
import { SvgIcon } from "@atoms";

const ReviewList = ({ reviewItems, isMobile }) => {
  const NextSlick = ({ onClick }) => (
    <span onClick={onClick}>
      <SvgIcon type={"arrowRight"} width={20} height={20} color="black" />
    </span>
  );

  const PrevSlick = ({ onClick }) => (
    <span onClick={onClick}>
      <SvgIcon type={"arrowLeft"} width={20} height={20} color="black" />
    </span>
  );

  return (
    <ReviewListContainer>
      <Slider
        arrows={true}
        dots={false}
        slidesToShow={isMobile ? 1.1 : 3}
        prevArrow={isMobile ? null : <PrevSlick onClick />}
        nextArrow={isMobile ? null : <NextSlick onClick />}
      >
        {reviewItems.map(
          ({ id, avatarPath, fullName, starCount, description }) => {
            return (
              <Review
                key={id}
                avatarPath={avatarPath}
                fullName={fullName}
                starCount={starCount}
                description={description}
              />
            );
          }
        )}
      </Slider>
    </ReviewListContainer>
  );
};
export default ReviewList;
