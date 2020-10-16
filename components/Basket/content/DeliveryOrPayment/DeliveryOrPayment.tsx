import { useState } from "react";
import theme from "styles/theme";
import { makePrice } from "utils";
import { CheckBox, SvgIcon } from "@atoms";
import { DeliveryContainer, DeliveryItem, PriceSpan } from "./styles";

const DeliveryOrPayment = ({ data }) => {
  const [typeId, setTypeId] = useState(1);

  return (
    <DeliveryContainer>
      <div>
        {Object.values(data).map(({ id, title, price, svg, width, height }) => {
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
                  >
                    {" "}
                  </CheckBox>
                )}

                <SvgIcon type={svg} width={width} height={height} />
                <PriceSpan>{makePrice(price)}</PriceSpan>
              </div>
              <h3> {title} </h3>
            </DeliveryItem>
          );
        })}
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
            <p>Служба доставки с настраиваемой ценой и сроком доставки</p>
            <p>Стоимость:</p>
            <p>
              <PriceSpan>{makePrice(data[typeId].price)}</PriceSpan>
            </p>
          </>
        ) : null}
      </div>
    </DeliveryContainer>
  );
};

export default DeliveryOrPayment;
