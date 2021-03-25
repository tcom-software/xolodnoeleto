import React from "react";
import Head from "next/head";
import Catalog from "../../components/Catalog";

const Index = () => {
  return (
    <>
      <Head>
        <title>Бренды products</title>
      </Head>
      <Catalog />
    </>
  );
};

export default React.memo(Index);
