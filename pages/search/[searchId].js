import React from "react";
import Head from "next/head";
import Catalog from "../../components/Catalog";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Search</title>
      </Head>
      <Catalog />
    </div>
  );
};

export default React.memo(Index);
