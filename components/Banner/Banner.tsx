import React from "react";
import data from "./data";
import Slider from "react-slick";
import { Container, Arrows } from "./styles";
import { GlobalSection } from "@atoms";
import SvgIcons from "../atoms/SvgIcon";
import theme from "../../styles/theme";

const Banner = () => {
  const images = data.map((e, i) => (
    <img
      key={i}
      src={`https://www.nastol.com.ua/pic/202009/1280x800/nastol.com.ua-423922.jpg`}
    />
  ));

  const NextSlick = ({ onClick }) => (
    <span onClick={onClick}>
      <SvgIcons type={"arrowRight"} width={20} height={20} color="white" />
    </span>
  );

  const PrevSlick = ({ onClick }) => (
    <span onClick={onClick}>
      <SvgIcons type={"arrowLeft"} width={20} height={20} color="white" />
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
          autoplay={true}
          speed={1000}
          autoplay-speed={10000}
          prevArrow={<PrevSlick />}
          nextArrow={<NextSlick />}
        >
          {images}
        </Slider>
      </Container>
    </GlobalSection>
  );
};

export default Banner;
