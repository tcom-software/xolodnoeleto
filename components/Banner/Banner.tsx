import React from "react";
import data from "./data";
import Slider from "react-slick";
import { Container } from "./styles";
import { GlobalSection, Image, SvgIcon } from "@atoms";
import theme from "styles/theme";
import CardsAboutUs from "../CardsAboutUs";

const Banner = () => {
  const images = data.map((e, i) => (
    <Image
      key={i}
      simpleWeb="https://www.nastol.com.ua/pic/202009/1280x800/nastol.com.ua-423922.jpg"
      simpleMobile="https://www.nastol.com.ua/pic/202009/1280x800/nastol.com.ua-423922.jpg"
      webpWeb={""}
      webpMobile={""}
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
          // autoplay={true}
          // speed={1000}
          // autoplay-speed={10000}
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
