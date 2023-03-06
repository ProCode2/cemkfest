import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EventsList from "../../../components/EventsList";
import { checkAdminAccess, getAllEvents } from "../../../feUtils/functions";

const EventsAdminPage = () => {
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
      <section className="bg-gradient-1 w-full h-full min-h-screen py-28 flex items-center justify-start flex-col px-2">
        <EventsList eventUrlPrefix="/admin/events" />
      </section>
    </>
  );
};

export default EventsAdminPage;
