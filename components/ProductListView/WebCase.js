import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { Button, SvgIcon } from "@famous";
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

            let imgInfo;
            if (item.product_picture_folder) {
              imgInfo = {
                folder: item.product_picture_folder,
                file_name: item.product_picture_file_name,
                file_format: item.product_picture_format,
              };
            } else {
              imgInfo = {
                folder: item.series_picture_folder,
                file_name: item.series_picture_file_name,
                file_format: item.series_picture_format,
              };
            }
            const imagePath = makeImagePath(imgInfo);

            return (
              <tr key={id}>
                {functionalType == "favorite" ? <td>{index + 1}</td> : null}
                <td>
                  <Link href={`/product/${id}`}>
                    <a>
                      <img
                        src={imagePath}
                        width={70}
                        height={70}
                        alt={`${brand} ${model}`}
                        title={`${brand} ${model}`}
                        className="product-image-table-and-mobile-case"
                        onError={(error) => {
                          error.target.src = "images/no_found/broken-image.png";
                        }}
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
  incrementFavorite: (data) => dispatch(incrementFavoriteCount(data)),
  decrementFavorite: (data) => dispatch(decrementFavoriteCount(data)),
  deleteFavoriteItem: (data) => dispatch(deleteFavoriteItem(data)),
  manipulationSelectedData: (data) => dispatch(manipulationSelectedData(data)),
});

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

export default connect(mapStateToProps, mapDispatchToProps)(WebCase);
