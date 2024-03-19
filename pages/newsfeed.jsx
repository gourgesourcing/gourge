import Head from "next/head";
import React from "react";

const Newsfeed = () => {
  return (
    <>
      <Head>
        <title>Newsfeed</title>
        <link rel="canonical" href="/newsfeed" />
        <meta name="description" content="gourgesourcing Latest Blog" />
      </Head>

      <div className="w-full h-screen py-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mt-[150px] text-3xl">
            <h2>Newsfeed</h2>
            <p>Thank you For your Interest!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsfeed;
