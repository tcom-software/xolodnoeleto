import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { Button, SvgIcon, ProductImage } from "@famous";
import { IncDec, makeImagePath, makePrice } from "@utils";
/**
 *  This Component give styled from parent component
 * */

import {
  addBasket,
  changeOrderStep,
  decrementBasketCount,
  deleteBasketItem,
  incrementBasketCount,
  manipulationSelectedData,
  updateStepsResult,
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

  incrementBasket,
  decrementBasket,
  deleteBasketItem,

  incrementFavorite,
  decrementFavorite,
  deleteFavoriteItem,
  manipulationSelectedData,
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
            const { id, count, model, brand, price } = item;

            const imagePath = makeImagePath(item);
            return (
              <tr key={id}>
                {functionalType == "favorite" ? <td>{index + 1}</td> : null}
                <td>
                  <Link href={`/product/${id}`}>
                    <a>
                      <ProductImage
                        src={imagePath}
                        alt={`${brand} ${model}`}
                        title={`${brand} ${model}`}
                        className="product-image-table-and-mobile-case"
                      />
                    </a>
                  </Link>
                  {borderShow ? <span></span> : null}
                </td>
                <td>
                  <div>
                    <Link href={`/product/${id}`}>
                      <a>
                        <p>{brand}</p>
                        <p>{model}</p>
                      </a>
                    </Link>
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
                      onClick={() => addBasket(item)}
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
              const newArray = Object.values(basketItems).reduce(
                (acc, { id, count }) => {
                  return {
                    ...acc,
                    products: {
                      ...acc["products"],
                      [id]: count,
                    },
                  };
                },
                {}
              );
              manipulationSelectedData(newArray);
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

  addBasket: (product) => dispatch(addBasket(product)),

  incrementBasket: (id) => dispatch(incrementBasketCount(id)),
  decrementBasket: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
  incrementFavorite: (id) => dispatch(incrementFavoriteCount(id)),
  decrementFavorite: (id) => dispatch(decrementFavoriteCount(id)),
  deleteFavoriteItem: (id) => dispatch(deleteFavoriteItem(id)),
  manipulationSelectedData: (data) => dispatch(manipulationSelectedData(data)),
});

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

export default connect(mapStateToProps, mapDispatchToProps)(WebCase);
