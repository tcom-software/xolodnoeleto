import React from "react";
import Head from "next/head";
import Favorite from "../components/Favorite";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Избранные</title>
      </Head>
      <Favorite />
    </div>
  );
};

export default Index;
