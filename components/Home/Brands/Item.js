import { Image } from "@famous";
import { BrandItem } from "./styles";
import { connect } from "react-redux";

const Item = ({ src, isMobile }) => {
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
        -(xx.y - xx.hh) / 5
      }deg) rotateY(${(xx.x - xx.hw) / 8}deg)`;
    }
  };

  return (
    <BrandItem onMouseLeave={onMouseLeave} onMouseMove={handleMouseMove}>
      <div className="layer"></div>
      <Image simpleWeb={src} webpWeb={""} />
    </BrandItem>
  );
};

const mapStateToProps = ({ general: { isMobile }, brands: { items } }) => ({
  isMobile,
});

export default connect(mapStateToProps)(Item);
