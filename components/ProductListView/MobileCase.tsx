import React from "react";
import { IncDec, makePrice } from "@utils";
import { connect } from "react-redux";
import { Button, SvgIcon } from "@famous";
import { CalculateCon, Img, ImgCon, MiniCon, Title, Container } from "./styles";

/**
 *  This Component give styled from parent component
 * */

import {
  addBasket,
  changeOrderStep,
  decrementBasketCount,
  deleteBasketItem,
  incrementBasketCount,
  updateStepsResult,
} from "redux/actions/basketActions";

import {
  decrementFavoriteCount,
  deleteFavoriteItem,
  incrementFavoriteCount,
} from "redux/actions/favoriteActions";

const MobileCase = ({
  basketItems,
  stepState,
  changeOrderStep,
  updateStepsResult,

  functionalType,

  addBasket,

  incrementFavorite,
  decrementFavorite,
  deleteFavoriteItem,

  incrementBasket,
  decrementBasket,
  deleteBasketItem,
}) => {
  return (
    <div>
      {Object.values(basketItems).map((item: any) => {
        const { src, manufacturer, model, price, id, count } = item;

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
              <div className="addBasket" onClick={() => addBasket(item)}>
                В корзину
              </div>
              <CalculateCon>
                <p>{makePrice(price)}</p>
                <div>
                  {functionalType == "favorite"
                    ? IncDec(id, count, incrementFavorite, decrementFavorite)
                    : IncDec(id, count, incrementBasket, decrementBasket)}
                </div>
              </CalculateCon>
              <SvgIcon
                type="close"
                width={15}
                height={15}
                callback={() =>
                  functionalType == "favorite"
                    ? deleteFavoriteItem(id)
                    : deleteBasketItem(id)
                }
              />
            </MiniCon>
          </Container>
        );
      })}
      {stepState == 2 ? (
        <div>
          <Button
            type="secondary"
            width="170px"
            height="47px"
            onClick={() => {
              updateStepsResult({ step: "stepOne", value: false });
              changeOrderStep(stepState - 1);
            }}
          >
            НАЗАД
          </Button>
          <Button
            type="primary"
            width="170px"
            height="47px"
            onClick={() => {
              updateStepsResult({ step: "stepTwo", value: true });
              changeOrderStep(stepState + 1);
            }}
          >
            ДАЛЕЕ
          </Button>
        </div>
      ) : null}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addBasket: (product) => dispatch(addBasket(product)),

  incrementBasket: (id) => dispatch(incrementBasketCount(id)),
  decrementBasket: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (step) => dispatch(updateStepsResult(step)),

  incrementFavorite: (data) => dispatch(incrementFavoriteCount(data)),
  decrementFavorite: (data) => dispatch(decrementFavoriteCount(data)),
  deleteFavoriteItem: (data) => dispatch(deleteFavoriteItem(data)),
});

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileCase);
