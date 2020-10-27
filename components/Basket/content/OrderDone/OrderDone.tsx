import React from "react";
import Link from "next/link";
import { Button, SvgIcon } from "@famous";
import { OrderDoneContainer } from "./styles";
import theme from "styles/theme";

const OrderDone = ({ text }) => {
  return (
    <OrderDoneContainer>
      <SvgIcon
        type="OrderDone"
        width={38}
        height={38}
        color={theme.body.primaryColor}
      />
      <p>{text}</p>
      <Button type="primary" width="250px" height="50px">
        <Link href="/">
          <a>Продолжить покупку</a>
        </Link>
      </Button>
    </OrderDoneContainer>
  );
};

export default OrderDone;
