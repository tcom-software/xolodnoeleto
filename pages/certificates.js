import Certificates from "../components/Certificates";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Сертификаты</title>
      </Head>
      <Certificates />
    </>
  );
};

export default React.memo(Index);
