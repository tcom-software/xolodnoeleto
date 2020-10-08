import React from "react";
import SvgIcons from "../atoms/SvgIcon";
import theme from "../../styles/theme";
import styled from "styled-components";
import { IncDec, makePrice } from "../../utils";
import { connect } from "react-redux";

import {
  decrementBasketCount,
  deleteBasketItem,
  incrementBasketCount,
} from "../../redux/actions/basketActions";

const BorderTd = styled.td`
  position: relative;
  span {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 70%;
    width: 0.5px;
    background: ${theme.body.someBorder};
  }
`;

const WebCase = ({
  basketItems,
  decrement,
  increment,
  deleteBasketItem,
  edit,
}) => {
  return (
    <table>
      <tbody>
        <tr>
          <th>Фото</th>
          <th>Название товара</th>
          <th>Цена /шт.</th>
          <th>Количество</th>
          <th>Итого</th>
          <th>Изменить</th>
          <th>Удалить</th>
        </tr>
        {Object.values(basketItems).map(
          ({ id, src, model, price, count, imageBorder, manufacturer }) => (
            <tr key={id}>
              <td>
                <img src={src} width={57} height={57} />
              </td>
              {imageBorder ? (
                <BorderTd>
                  <span></span>
                </BorderTd>
              ) : null}
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
                {IncDec({
                  id,
                  count,
                  increment,
                  decrement,
                })}
              </td>
              <td>{makePrice(price * count)}</td>
              {edit ? (
                <td>
                  <SvgIcons type="edit" width={15} height={15} />
                </td>
              ) : null}
              <td>
                <SvgIcons
                  type="close"
                  width={15}
                  height={15}
                  callback={() => deleteBasketItem(id)}
                />
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

const mapDispatchToProps = (dispatch) => ({
  increment: (id) => dispatch(incrementBasketCount(id)),
  decrement: (id) => dispatch(decrementBasketCount(id)),
  deleteBasketItem: (id) => dispatch(deleteBasketItem(id)),
});
export default connect(false, mapDispatchToProps)(WebCase);