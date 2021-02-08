import React from "react";
import Link from "next/link";
import { Button, SvgIcon, ProductImage } from "@famous";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IncDec, makeImagePath, makePrice } from "@utils";
import basketMoveTo from "../../../../utils/basketMoveTo";
import { CalculateCon, ImgCon, MiniCon, Title, Container } from "../../styles";

/**
 *  This Component give styled from parent component
 * */

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

export default MobileCase;
