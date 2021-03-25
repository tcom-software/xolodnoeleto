import PaymentAndDelivery from "../components/PaymentAndDelivery";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Доставка кондиционеров в Москве и Московской области. Установка
          кондиционеров в Москве.
        </title>
      </Head>
      <PaymentAndDelivery />
    </>
  );
};

export default React.memo(Index);
