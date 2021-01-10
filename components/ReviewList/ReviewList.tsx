import { ReviewListContainer } from "./styles";
import React from "react";
import Link from "next/link";
import Review from "../Review";
import Slider from "react-slick";
import { Button, SvgIcon } from "@famous";

const ReviewList = ({ initialReviews, isMobile, openModal }) => {
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
      {initialReviews.length > 0 ? (
        <>
          <Link href="/reviews">
            <a>
              <h2 className="header">Отзывы</h2>
            </a>
          </Link>
          <p className="title">
            Бригада монтажников молодцы,монтаж за час! Менеджерам тоже
            спасибо,всегда на связи и очень лояльны к клиенту. Считаю на
            сегодня.
          </p>
          <Slider
            arrows={true}
            dots={false}
            slidesToShow={isMobile ? 1.1 : 3}
            prevArrow={isMobile ? null : <PrevSlick onClick />}
            nextArrow={isMobile ? null : <NextSlick onClick />}
          >
            {initialReviews.map(({ id, full_name, rating, comment }) => {
              return (
                <Review
                  key={id}
                  fullName={full_name}
                  starCount={rating}
                  description={comment}
                />
              );
            })}
          </Slider>
        </>
      ) : null}
      <Button
        type={"default"}
        width={"260px"}
        height={"56px"}
        color={"black"}
        boxShadow={"0px 0px 5px rgba(0, 0, 0, 0.15)"}
        background="#FFD600"
        onClick={() => openModal("AddReview")}
      >
        Добавить отзыв
      </Button>
    </ReviewListContainer>
  );
};
export default ReviewList;
