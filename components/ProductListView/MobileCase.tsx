import { IncDec, makePrice } from "../../utils";
import { SvgIcon } from "@atoms";
import React from "react";
import { connect } from "react-redux";
import { Button } from "@atoms";
import {
  CalculateCon,
  Edit,
  Img,
  ImgCon,
  MiniCon,
  Title,
  Container,
} from "./styles";

import {
  changeOrderStep,
  decrementBasketCount,
  deleteBasketItem,
  incrementBasketCount,
  updateStepsResult,
} from "redux/actions/basketActions";

const MobileCase = ({
  basketItems,
  increment,
  decrement,
  stepState,
  changeOrderStep,
  deleteBasketItem,
  updateStepsResult,
}) => {
  return (
    <div>
      {Object.values(basketItems).map(
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
                <SvgIcon
                  type="close"
                  width={15}
                  height={15}
                  callback={() => deleteBasketItem(id)}
                />
              </MiniCon>
            </Container>
          );
        }
      )}
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
  increment: (id) => dispatch(incrementBasketCount(id)),
  decrement: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
  changeOrderStep: (step) => dispatch(changeOrderStep(step)),
  updateStepsResult: (step) => dispatch(updateStepsResult(step)),
});

const mapStateToProps = ({ basket: { stepState } }) => ({
  stepState,
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileCase);
