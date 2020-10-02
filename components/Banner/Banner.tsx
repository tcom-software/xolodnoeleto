import React from "react";
import data from "./data";
import Slider from "react-slick";
import { Container, Arrows } from "./styles";
import { GlobalSection } from "@atoms";
import SvgIcons from "../atoms/SvgIcon";

const Banner = () => {
  const images = data.map((e, i) => (
    <img
      key={i}
      src={`https://www.nastol.com.ua/pic/202009/1280x800/nastol.com.ua-423922.jpg`}
    />
  ));

  return (
    <GlobalSection>
      <Container>
        <Slider
          arrows={true}
          prevArrow={
            <Arrows left={true}>
              <SvgIcons type="arrowLeft" width={20} height={20} />
            </Arrows>
          }
          nextArrow={
            <Arrows right={true}>
              <SvgIcons type="arrowRight" width={20} height={20} />
            </Arrows>
          }
        >
          {images}
        </Slider>
      </Container>
    </GlobalSection>
  );
};

export default Banner;
