import React, { useEffect, useState } from "react";
import { Scroll } from "@utils";
import theme from "styles/theme";
import { Button, CheckBox, Loading, SvgIcon } from "@famous";
import { DeliveryContainer, DeliveryItem, PriceSpan } from "./styles";
import basketMoveTo from "../../../../utils/basketMoveTo";

const DeliveryOrPayment = ({
  loading,
  isMobile,
  data,
  stepState,
  changeOrderStep,
  updateStepsResult,
  makeInitialStepsResult,
  manipulationSelectedData,
}) => {
  const [typeId, setTypeId] = useState(1);
  const { To } = Scroll;
  useEffect(() => {
    setTypeId(1);
  }, [stepState]);

  return (
    <DeliveryContainer loading={loading ? 1 : 0}>
      <div className="background-loading">
        <Loading />
      </div>
      <div>
        <div>
          {Object.values(data).map(
            ({ id, title, price, svg, width, height }) => {
              return (
                <DeliveryItem id={id} key={id} selected={typeId}>
                  <div onClick={() => setTypeId(id)}>
                    {typeId === id ? (
                      <CheckBox
                        width="15px"
                        height="15px"
                        padding="2px"
                        border={`none`}
                        background={theme.body.primaryColor}
                        callback={() => {}}
                      >
                        <SvgIcon
                          type="checkedRadioArrow"
                          width={35}
                          height={22}
                          color={"white"}
                        />
                      </CheckBox>
                    ) : (
                      <CheckBox
                        width="15px"
                        height="15px"
                        padding="2px"
                        border={`1px solid  ${theme.body.someBorder}`}
                        background="transparent"
                        callback={() => {}}
                      >
                        {" "}
                      </CheckBox>
                    )}

                    <SvgIcon type={svg} width={width} height={height} />
                    {stepState === 4 ? <PriceSpan>{price}</PriceSpan> : null}
                  </div>
                  <h3> {title} </h3>
                </DeliveryItem>
              );
            }
          )}
        </div>
        <div>
          {typeId ? (
            <>
              <p>{data[typeId].title}</p>
              <div>
                <DeliveryItem
                  id={typeId}
                  width="102px"
                  height="58px"
                  oneElem={true}
                  selected={typeId}
                >
                  <div>
                    <SvgIcon type={data[typeId].svg} width={35} height={22} />
                  </div>
                </DeliveryItem>
              </div>
              <p>???????????? ???????????????? ?? ?????????????????????????? ?????????? ?? ???????????? ????????????????</p>
              <p>??????????????????:</p>
              <p>
                <PriceSpan>{data[typeId].price}</PriceSpan>
              </p>
            </>
          ) : null}
        </div>
      </div>
      <div className="product-buttons-mobile-case">
        <Button
          type="secondary"
          width="170px"
          height="47px"
          onClick={() => {
            if (stepState === 4) {
              updateStepsResult({ step: "stepTree", value: false });
            } else if (stepState === 5) {
              updateStepsResult({ step: "stepFour", value: false });
            }
            changeOrderStep(stepState - 1);
            basketMoveTo(isMobile);
          }}
        >
          ??????????
        </Button>
        <Button
          type="primary"
          width="170px"
          height="47px"
          onClick={() => {
            if (stepState === 4) {
              manipulationSelectedData({
                delivery_type: data[typeId].title,
              });
              updateStepsResult({ step: "stepFour", value: true });
              changeOrderStep(stepState + 1);
              basketMoveTo(isMobile);
            } else if (stepState === 5) {
              manipulationSelectedData({
                payment_type: data[typeId].title,
              });
              updateStepsResult({ step: "stepFive", value: true });
            }
          }}
        >
          {stepState !== 5 ? "??????????" : "???????????????? ??????????"}
        </Button>
      </div>
    </DeliveryContainer>
  );
};

export default DeliveryOrPayment;
