import AboutUs from "../components/AboutUs";
import Head from "next/head";
import React from "react";

const Index = () => {
  return (
    <>
      <Head>
        <title>О нас</title>
      </Head>
      <AboutUs />
    </>
  );
};

export default React.memo(Index);
