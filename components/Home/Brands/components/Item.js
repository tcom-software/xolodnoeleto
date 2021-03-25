import React from "react";
import Link from "next/link";
import { Image } from "@famous";
import getConfig from "next/config";
import { connect } from "react-redux";
import { BrandItem } from "../styles";

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
    <BrandItem onMouseLeave={onMouseLeave} onMouseMove={handleMouseMove}>
      <div className="layer">
        <Link href={`/brand-products/${id}`} key={id}>
          <a></a>
        </Link>
      </div>
      <Image
        simpleWeb={serverUrl + brandsUpload + "/" + src}
        webpWeb={""}
        alt={name}
      />
    </BrandItem>
  );
};

const mapStateToProps = ({ general: { isMobile } }) => ({
  isMobile,
});

export default connect(mapStateToProps)(Item);
