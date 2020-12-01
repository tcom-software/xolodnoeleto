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

          {Object.values(basketItems).map((item: any, index) => {
            const {
              id,
              count,
              model,
              brand,
              price,
              series_picture_folder,
              series_picture_file_name,
              series_picture_format,
              product_picture_folder,
              product_picture_file_name,
              product_picture_format,
            } = item;

            const imagePath = makeImagePath({
              series_picture_folder,
              series_picture_file_name,
              series_picture_format,
              product_picture_folder,
              product_picture_file_name,
              product_picture_format,
            });

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
});

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

export default connect(mapStateToProps, mapDispatchToProps)(WebCase);
