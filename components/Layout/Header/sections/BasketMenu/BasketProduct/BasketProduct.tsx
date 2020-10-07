import SvgIcons from "../../../../../atoms/SvgIcon";
import { makePrice, IncDec } from "utils";
import { Item, ImgContainer, Title, Image, Price } from "./styles";
import { basketProductInterface } from "interfaces";

const BasketProduct = (
  {
    id,
    src,
    model,
    price,
    count,
    manufacturer,
    increment,
    decrement,
    deleteBasketItem,
    edit = false,
  },
  basketProductInterface
) => {
  return (
    <Item>
      <ImgContainer>
        <Image src={src} />
      </ImgContainer>
      <Title>
        <span>{manufacturer}</span>
        <br />
        <span>{model}</span>
      </Title>
      <Price>{makePrice(price)}</Price>
      {IncDec({
        id,
        count,
        increment,
        decrement,
      })}
      <Price>{makePrice(price * count)}</Price>

      {edit ? (
        <SvgIcons
          type="edit"
          width={13}
          height={13}
          callback={() => deleteBasketItem(id)}
        />
      ) : null}

      <SvgIcons
        type="close"
        width={13}
        height={13}
        callback={() => deleteBasketItem(id)}
      />
    </Item>
  );
};

export default BasketProduct;
