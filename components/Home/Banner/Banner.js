import React from "react";
import data from "./data";
import theme from "styles/theme";
import Slider from "react-slick";
import { Container } from "./styles";
import CardsAboutUs from "../CardsAboutUs/index";
import { GlobalSection, Image, SvgIcon } from "@famous";

const Banner = () => {
  const images = data.map((e, i) => (
    <Image
      key={i}
      simpleWeb={`/images/slider_images/${i + 1}.png`}
      webpWeb={""}
    />
  ));

  const NextSlick = ({ onClick }) => (
    <span onClick={onClick}>
      <SvgIcon type={"arrowRight"} width={20} height={20} color="white" />
    </span>
  );

  const PrevSlick = ({ onClick }) => (
    <span onClick={onClick}>
      <SvgIcon type={"arrowLeft"} width={20} height={20} color="white" />
    </span>
  );

  return (
    <GlobalSection
      isWeb={true}
      isMobile={true}
      overflowStyle={true}
      borderTop={false}
      borderBottom={false}
      webBackground={theme.body.secondBackground}
    >
      <Container>
        <Slider
          arrows={true}
          dots={true}
          prevArrow={<PrevSlick onClick />}
          nextArrow={<NextSlick onClick />}
        >
          {images}
        </Slider>
      </Container>
      <Container>
        <CardsAboutUs />
      </Container>
    </GlobalSection>
  );
};

export default Banner;
