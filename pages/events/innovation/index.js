import React from "react";
import Head from "next/head";
import Innovations from "../../../components/Innovations";
import EventsList from "../../../components/EventsList";

const InnovationPage = () => {
  return (
    <>
      <Head>
        <title>ResonanceXII</title>
        <meta name="description" content="Generated by ResonanceXII" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-1 w-screen min-h-screen flex flex-col justify-center items-center">
        <Innovations />
      </section>
    </>
  );
};

export default InnovationPage;
