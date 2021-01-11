import { Image } from "@famous";
import { BrandItem } from "./styles";

const Item = ({ src }) => {
  const onMouseLeave = (e) => {
    e.currentTarget.style = `transform: rotateX(0deg) rotateY(0deg);`;
  };
  const handleMouseMove = (e) => {
    const xx = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      hh: e.currentTarget.offsetHeight / 2,
      hw: e.currentTarget.offsetWidth / 2,
    };
    e.currentTarget.style = `transform: rotateX(${
      -(xx.y - xx.hh) / 5
    }deg) rotateY(${(xx.x - xx.hw) / 8}deg)`;
  };

  return (
    <BrandItem onMouseLeave={onMouseLeave} onMouseMove={handleMouseMove}>
      <div className="layer"></div>
      <Image simpleWeb={src} webpWeb={""} />
    </BrandItem>
  );
};

export default Item;
