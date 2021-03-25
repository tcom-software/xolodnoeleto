import React from "react";
import Product from "../../components/Product";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>ХолодноеЛето Товар </title>
      </Head>
      <Product />
    </>
  );
};

export default React.memo(Index);
