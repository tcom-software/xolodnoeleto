import styled from "styled-components";
import { Image } from "@atoms";
import SvgIcons from "../../../../../atoms/SvgIcon";
import { makePrice } from "utils";
import theme from "styles/theme";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 66px;
  padding: 8px;
  margin: 5px 0;
  border: 1px solid #d8d8d8;
`;
const ImgContainer = styled.div``;
const Title = styled.h3``;
const IncDec = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    margin: 0px 5px;
  }
`;
const Price = styled.div`
  font-weight: ${theme.body.fontBolder};
`;
const SvgBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  background: #f6f6f6;
  padding: 4px 6px 2px;
`;
const CountContainer = styled.div``;

const IncDecSection = (inc, dec, count) => {
  return (
    <IncDec>
      <SvgBack>
        <SvgIcons type="minus" width={11} height={11} />
      </SvgBack>
      <CountContainer>{count}</CountContainer>
      <SvgBack>
        <SvgIcons type="plus" width={11} height={11} />
      </SvgBack>
    </IncDec>
  );
};

interface basketProductInterface {
  price: number;
  src: string;
  manufacturer: string;
  model: string;
}

const Product = (
  { manufacturer, model, price, src },
  basketProductInterface
) => {
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
          width="57px"
          height="57px"
        />
      </ImgContainer>
      <Title>
        <span>{manufacturer}</span>
        <br />
        <span>{model}</span>
      </Title>
      <Price>{makePrice(price)}</Price>
      {IncDecSection(null, null, count)}
      <Price>{makePrice(total)}</Price>
      <SvgIcons type="close" width={13} height={13} />
    </Item>
  );
};

export default Product;
