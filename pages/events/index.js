import React from "react";
import Head from "next/head";
import EventsList from "../../components/EventsList";

const EventsPage = () => {
  return (
    <>
      <Head>
        <title>ResonanceXII</title>
        <meta name="description" content="Unleash The Matrix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-1 w-full h-full min-h-screen py-28 flex items-center justify-start flex-col">
        <div className="w-full flex justify-center items-center h-full">
          <EventsList eventUrlPrefix="/events" />
        </div>
      </section>
    </>
  );
};

export default EventsPage;
