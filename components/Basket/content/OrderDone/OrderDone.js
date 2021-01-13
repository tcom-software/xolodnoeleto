import React, { useEffect } from "react";
import Link from "next/link";
import theme from "styles/theme";
import { Button, SvgIcon } from "@famous";
import { OrderDoneContainer } from "./styles";

const OrderDone = ({ text, makeInitialStepsResult }) => {
  useEffect(() => {
    return () => {
      makeInitialStepsResult(1);
    };
  }, []);

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
