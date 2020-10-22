import React from "react";
import { connect } from "react-redux";
import { Button, SvgIcon } from "@atoms";
import { IncDec, makePrice } from "utils";

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
  addBasketFromFavorite,
} from "redux/actions/basketActions";

import {
  decrementFavoriteCount,
  deleteFavoriteItem,
  incrementFavoriteCount,
} from "redux/actions/favoriteActions";

const WebCase = ({
  header,
  stepState,
  borderShow,
  basketItems,
  basketButton,
  changeOrderStep,
  updateStepsResult,

  functionalType,

  addBasket,
  addBasketFromFavorite,
  incrementBasket,
  decrementBasket,
  deleteBasketItem,

  incrementFavorite,
  decrementFavorite,
  deleteFavoriteItem,
}) => {
  return (
    <div>
      <table>
        <tbody>
          {header ? (
            <tr>
              {functionalType == "favorite" ? <th>#</th> : null}
              <th>Фото</th>
              <th>Название товара</th>
              <th>Цена /шт.</th>
              <th>Количество</th>
              <th>Итого</th>
              {basketButton ? <th></th> : null}
              <th>Удалить</th>
            </tr>
          ) : null}

          {Object.values(basketItems).map((item, index) => {
            const { id, src, model, price, count, manufacturer }: any = item;
            return (
              <tr key={id}>
                {functionalType == "favorite" ? <td>{index + 1}</td> : null}
                <td>
                  <img src={src} width={57} height={57} />
                  {borderShow ? <span></span> : null}
                </td>
                <td>
                  <div>
                    <p>{manufacturer}</p>
                    <p>{model}</p>
                  </div>
                </td>
                <td>
                  <div>
                    <div>{makePrice(price)}</div>
                  </div>
                </td>
                <td>
                  {functionalType == "favorite"
                    ? IncDec(id, count, incrementFavorite, decrementFavorite)
                    : IncDec(id, count, incrementBasket, decrementBasket)}
                </td>
                <td>{makePrice(price * count)}</td>
                {basketButton ? (
                  <td>
                    <Button
                      type={"secondary"}
                      width={`100%`}
                      height={"47px"}
                      onClick={() =>
                        functionalType == "favorite"
                          ? addBasketFromFavorite(item)
                          : addBasket(id)
                      }
                    >
                      В корзину
                    </Button>
                  </td>
                ) : null}
                <td>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (data) => dispatch(updateStepsResult(data)),

  addBasket: (id) => dispatch(addBasket(id)),
  addBasketFromFavorite: (id) => dispatch(addBasketFromFavorite(id)),

  incrementBasket: (id) => dispatch(incrementBasketCount(id)),
  decrementBasket: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
  incrementFavorite: (data) => dispatch(incrementFavoriteCount(data)),
  decrementFavorite: (data) => dispatch(decrementFavoriteCount(data)),
  deleteFavoriteItem: (data) => dispatch(deleteFavoriteItem(data)),
});

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

export default connect(mapStateToProps, mapDispatchToProps)(WebCase);
