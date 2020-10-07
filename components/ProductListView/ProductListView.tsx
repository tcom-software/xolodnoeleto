import React from "react";
import { IncDec, makePrice } from "utils";
import SvgIcons from "../atoms/SvgIcon";
import { Tr, BorderTd } from "./styles";

const ProductListView = ({
  item: { id, src, model, price, count, manufacturer },
  edit,
  imageBorder,
  increment,
  decrement,
  deleteBasketItem,
}) => {
  return (
    <Tr key={id}>
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
      <td>{makePrice(price)}</td>
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
    </Tr>
  );
};

export default ProductListView;
