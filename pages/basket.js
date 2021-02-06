import Head from "next/head";
import React from "react";
import Basket from "../components/Basket";

const index = () => {
  return (
    <div>
      <Head>
        <title>Корзина</title>
      </Head>
      <Basket />
    </div>
  );
};

export default React.memo(Index);
