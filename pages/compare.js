import React from "react";
import Compare from "../components/Compare";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>Сравнения продуктов </title>
      </Head>
      <Compare />
    </>
  );
};

export default Index;
