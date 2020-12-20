import Brands from "../components/Brands";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>Бренды</title>
      </Head>
      <Brands />
    </>
  );
};

export default Index;
