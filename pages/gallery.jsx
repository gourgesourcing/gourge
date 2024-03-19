import React from "react";
import Images from "../components/Images";
import Head from "next/head";

const Gallery = () => {
  return (
    <>
      <Head>
        <title>Gallery</title>
        <link rel="canonical" href="/gallery" />
        <meta
          name="description"
          content="This is Our Latest Product Collection."
        />
        <meta
          name="keywords"
          content="rmg product, apparel product image, fabric"
        />
      </Head>
      <div>
        <Images />
      </div>
    </>
  );
};

export default Gallery;
