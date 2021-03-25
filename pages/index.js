import React from "react";
import Home from "../components/Home";
import Head from "next/head";

const Index = () => {
  return (
    <div>
      <Head>
        <title>
          Купить кондиционер в Москве. Цены, продажа, установка кондиционеров.
        </title>
      </Head>
      <Home />
    </div>
  );
};

export default React.memo(Index);
