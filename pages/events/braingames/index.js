import React from "react";
import Head from "next/head";
import BrainGames from "../../../components/BrainGames";
import EventsList from "../../../components/EventsList";

const BrainGamesPage = () => {
  return (
    <>
      <Head>
        <title>ResonanceXII</title>
        <meta name="description" content="Generated by ResonanceXII" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-1 w-screen h-full flex flex-col justify-center items-center">
        <BrainGames />
        <div className="w-full flex justify-center items-center">
          <EventsList />
        </div>
      </section>
    </>
  );
};

export default BrainGamesPage;
