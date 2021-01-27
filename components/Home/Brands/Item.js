import { Image } from "@famous";
import { BrandItem } from "./styles";
import { connect } from "react-redux";
import getConfig from "next/config";
import Link from "next/link";
import React from "react";

const {
  publicRuntimeConfig: { serverUrl, brandsUpload },
} = getConfig();

const Item = ({ id, name, src, isMobile }) => {
  const onMouseLeave = (e) => {
    if (!isMobile) {
      e.currentTarget.style = `transform: rotateX(0deg) rotateY(0deg);`;
    }
  };

  const handleMouseMove = (e) => {
    if (!isMobile) {
      const xx = {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
        hh: e.currentTarget.offsetHeight / 2,
        hw: e.currentTarget.offsetWidth / 2,
      };
      e.currentTarget.style = `transform: rotateX(${
        -(xx.y - xx.hh) / 2
      }deg) rotateY(${(xx.x - xx.hw) / 8}deg)`;
    }
  };

  return (
    <Link href={`/catalog?manufacturerCountries=${id}`}>
      <BrandItem onMouseLeave={onMouseLeave} onMouseMove={handleMouseMove}>
        <div className="layer"></div>
        <Image
          simpleWeb={serverUrl + brandsUpload + src}
          webpWeb={""}
          alt={name}
        />
      </BrandItem>
    </Link>
  );
};

const mapStateToProps = ({ general: { isMobile } }) => ({
  isMobile,
});

export default connect(mapStateToProps)(Item);
