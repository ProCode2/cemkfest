import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EventsList from "../../../components/EventsList";
import { checkAdminAccess, getAllEvents } from "../../../feUtils/functions";

const EventsAdminPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    try {
      checkAdminAccess();
    } catch (e) {
      window.location.href = "/";
    }
    getAllEvents()
      .then((data) => setEvents(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Head>
        <title>ResonanceXII</title>
        <meta name="description" content="Unleash The Matrix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-1 w-full h-full min-h-screen py-28 flex items-center justify-start flex-col px-2">
        <EventsList eventUrlPrefix="/admin/events" />
      </section>
    </>
  );
};

export default EventsAdminPage;
