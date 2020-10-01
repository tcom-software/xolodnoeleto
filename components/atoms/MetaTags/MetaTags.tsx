import Head from "next/head";
import { HeadInfo } from "interfaces";

const HeaderTags = (props: HeadInfo) => {
  const { metaTitle, metaDescription, metaKeyWord } = props;

  return (
    <Head>
      <title> {metaTitle} </title>
      <meta property="og:title" content={metaTitle} key="title" />
      <meta property="og:keywords" content={metaTitle} key="title" />
      <meta
        property="og:description"
        content={metaDescription}
        key="description"
      />
    </Head>
  );
};

export default HeaderTags;
