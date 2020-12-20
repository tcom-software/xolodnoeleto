import React from "react";
import Catalogue from "../../components/Catalogue";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Каталог продуктов</title>
      </Head>
      <Catalogue />
    </>
  );
};

export default Index;
