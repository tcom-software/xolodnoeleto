import Head from "next/head";
import React from "react";
import BrandProducts from "../../components/BrandProducts";

const Index = () => {
  return (
    <>
      <Head>
        <title>Бренды products</title>
      </Head>
      <BrandProducts />
    </>
  );
};

export default Index;
