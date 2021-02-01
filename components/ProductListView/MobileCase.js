import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { Button, SvgIcon, ProductImage } from "@famous";
import { IncDec, makeImagePath, makePrice, Scroll } from "@utils";
import { CalculateCon, Img, ImgCon, MiniCon, Title, Container } from "./styles";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
import basketMoveTo from "../../utils/basketMoveTo";
import { setNotificationMessage } from "../../redux/actions/generalActions";

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
  isMobile,
  setNotificationMessage,
}) => {
  return (
    <div>
      {Object.values(basketItems).map((item, index) => {
        const { id, count, model, brand, price, series_name } = item;
        const imagePath = makeImagePath(item);

        return (
          <Container key={id + index}>
            <ImgCon>
              <Link href={`/product/${id}`}>
                <a>
                  <ProductImage
                    src={imagePath}
                    alt={`${brand} ${series_name} ${model}`}
                    title={`${brand} ${series_name} ${model}`}
                    className="product-image-table-and-mobile-case"
                  />
                </a>
              </Link>
            </ImgCon>
            <MiniCon>
              <Title>
                <CopyToClipboard
                  text={`${brand} ${series_name || ""} ${model}`}
                >
                  <div
                    title="Скопировать модель"
                    onClick={(e) => {
                      e.preventDefault();
                      setNotificationMessage({
                        message: `Вы скопировал Модель`,
                        type: "success",
                      });
                    }}
                  >
                    <p>{brand}</p>
                    <p>{series_name}</p>
                    <p>{model}</p>
                  </div>
                </CopyToClipboard>
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
        <div className={"product-buttons-mobile-case"}>
          <Button
            type="secondary"
            width="175px"
            height="47px"
            onClick={() => {
              updateStepsResult({ step: "stepOne", value: false });
              changeOrderStep(stepState - 1);
              basketMoveTo(isMobile);
            }}
          >
            НАЗАД
          </Button>
          <Button
            type="primary"
            width="175px"
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
              basketMoveTo(isMobile);
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

  incrementFavorite: (id) => dispatch(incrementFavoriteCount(id)),
  decrementFavorite: (id) => dispatch(decrementFavoriteCount(id)),
  deleteFavoriteItem: (id) => dispatch(deleteFavoriteItem(id)),
  manipulationSelectedData: (data) => dispatch(manipulationSelectedData(data)),
  setNotificationMessage: (message) =>
    dispatch(setNotificationMessage(message)),
});

const mapStateToProps = ({ general: { isMobile }, basket: { stepState } }) => ({
  stepState,
  isMobile,
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileCase);
