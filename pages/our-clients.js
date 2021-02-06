import OurClients from "../components/OurClients";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Хolodnoeleto Клиенты xolodnoeleto.ru Сертификаты</title>
      </Head>
      <OurClients />
    </>
  );
};

export default React.memo(Index);
