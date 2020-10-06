import styled from "styled-components";
import { Image } from "@atoms";
import SvgIcons from "../../../../../atoms/SvgIcon";
import { makePrice } from "utils";

const Item = styled.div``;
const ImgContainer = styled.div``;
const Title = styled.h3``;
const IncDec = styled.div``;
const Price = styled.div``;
const SvgBack = styled.div``;
const CountContainer = styled.div``;

const IncDecSection = ({ inc, dec, count }) => {
  return (
    <IncDec>
      <SvgBack>
        <SvgIcons type="minus" width={11} height={2} />
        <CountContainer>{count}</CountContainer>
        <SvgIcons type="plus" width={11} height={11} />
      </SvgBack>
    </IncDec>
  );
};

interface basketProductInterface {
  price: number;
  src: string;
  title: string;
}

const Product = ({ price, src, title }, basketProductInterface) => {
  const total = price;
  const count = 7;

  return (
    <Item>
      <ImgContainer>
        <Image

          simpleWeb={src}
          simpleMobile={src}
          webpWeb={""}
          webpMobile={""}
        />
      </ImgContainer>
      <Title>{total}</Title>
      <Price>{makePrice(price)}</Price>
      {IncDecSection({null, null, count})}
      <Price>{makePrice(total)}</Price>
      <SvgIcons type="close" width={13} height={13} />
    </Item>
  );
};

export default Product;
