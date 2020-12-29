import React from "react";
import Catalog from "../../components/Catalog";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Каталог продуктов</title>
      </Head>
      <Catalog />
    </>
  );
};

export default Index;
