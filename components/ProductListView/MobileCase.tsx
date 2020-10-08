import {
  CalculateCon,
  Edit,
  Img,
  ImgCon,
  MiniCon,
  Title,
  Container,
} from "./styles";
import { IncDec, makePrice } from "../../utils";
import SvgIcons from "../atoms/SvgIcon";
import React from "react";
import { connect } from "react-redux";

import {
  decrementBasketCount,
  deleteBasketItem,
  incrementBasketCount,
} from "../../redux/actions/basketActions";

const MobileCase = ({
  basketItems,
  increment,
  decrement,
  deleteBasketItem,
}) => {
  return Object.values(basketItems).map(
    ({ src, manufacturer, model, price, id, count }) => {
      return (
        <Container key={id}>
          <ImgCon>
            <Img src={src} />
          </ImgCon>
          <MiniCon>
            <Title>
              <p>{manufacturer}</p>
              <p>{model}</p>
            </Title>
            <Edit>Изменить</Edit>
            <CalculateCon>
              <p>{makePrice(price)}</p>
              <div>
                {IncDec({
                  id,
                  count,
                  increment,
                  decrement,
                })}
              </div>
            </CalculateCon>
            <SvgIcons
              type="close"
              width={15}
              height={15}
              callback={() => deleteBasketItem(id)}
            />
          </MiniCon>
        </Container>
      );
    }
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: (id) => dispatch(incrementBasketCount(id)),
  decrement: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
});

export default connect(false, mapDispatchToProps)(MobileCase);
