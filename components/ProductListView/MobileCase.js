import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { Button, SvgIcon } from "@famous";
import { IncDec, makeImagePath, makePrice } from "@utils";
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
  manipulationSelectedData,
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

  manipulationSelectedData,
}) => {
  return (
    <div>
      {Object.values(basketItems).map((item) => {
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
          <Container key={id}>
            <ImgCon>
              <Link href={`/product/${id}`}>
                <a>
                  <Img
                    src={imagePath}
                    alt={`${brand} ${model}`}
                    title={`${brand} ${model}`}
                    className="product-image-table-and-mobile-case"
                    onError={(error) => {
                      error.target.src = "images/no_found/broken-image.png";
                    }}
                  />
                </a>
              </Link>
            </ImgCon>
            <MiniCon>
              <Title>
                <Link href={`/product/${id}`}>
                  <a>
                    <p>{brand}</p>
                    <p>{model}</p>
                  </a>
                </Link>
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
              const newArray = Object.values(basketItems).reduce(
                (acc, { id, count }) => {
                  return {
                    ...acc,
                    [id]: count,
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
  addBasket: (product) => dispatch(addBasket(product)),

  incrementBasket: (id) => dispatch(incrementBasketCount(id)),
  decrementBasket: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (step) => dispatch(updateStepsResult(step)),

  incrementFavorite: (data) => dispatch(incrementFavoriteCount(data)),
  decrementFavorite: (data) => dispatch(decrementFavoriteCount(data)),
  deleteFavoriteItem: (data) => dispatch(deleteFavoriteItem(data)),
  manipulationSelectedData: (data) => dispatch(manipulationSelectedData(data)),
});

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileCase);
