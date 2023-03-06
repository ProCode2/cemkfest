import React from "react";
import Head from "next/head";
import EventsList from "../../components/EventsList";

const EventsPage = () => {
  return (
    <>
      <section className="bg-gradient-1 w-full h-full min-h-screen py-28 flex items-center justify-start flex-col">
        <div className="w-full flex justify-center items-center h-full">
          <EventsList eventUrlPrefix="/events" />
        </div>
      </section>
    </>
  );
};

export default EventsPage;
