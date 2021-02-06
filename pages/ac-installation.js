import AcInstallation from "../components/AcInstallation";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>
          Монтаж кондиционеров, установка кондиционеров в Москве и МО. Цена на
          установку кондиционера.
        </title>
      </Head>
      <AcInstallation />
    </>
  );
};

export default React.memo(Index);
