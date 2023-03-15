import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
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
        <div className="w-full max-w-5xl py-6 px-4">
          <Link href="/admin/addevents">
            <button className="block ml-auto bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
              Add Event
            </button>
          </Link>
        </div>
        <EventsList eventUrlPrefix="/admin/events" />
      </section>
    </>
  );
};

export default EventsAdminPage;
