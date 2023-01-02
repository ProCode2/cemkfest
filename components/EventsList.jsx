import React, { useState } from "react";

import { eventsList } from "../public/eventsData";

const EventsList = () => {
  const [tab, setTab] = useState("1");
  const [events, setEvents] = useState(eventsList);

  const getEventsTable = (tabValue) => {
    if (tabValue == "1") {
      return (
        <div className="grid grid-cols-3 text-sm">
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Something
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2 font-mono">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Something
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2 font-mono">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Something
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2 font-mono">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Something
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2 font-mono">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Something
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2 font-mono">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
        </div>
      );
    } else {
      return (
        <div className="grid grid-cols-3 text-sm">
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Something
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2 font-mono">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Something
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2 font-mono">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Something
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2 font-mono">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Something
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2 font-mono">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
        </div>
      );
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="">
        <h1 className="text-gradient font-bold text-2xl md:text-4xl tracking-wide">
          Events
        </h1>
      </div>
      <div className="flex justify-start items-center py-4">
        <span
          onClick={() => setTab("1")}
          className={`pr-8 py-2 cursor-pointer text-lg text-left transition-all ease-in-out duration-300 ${
            tab == "1" ? "underline-shadow" : ""
          }`}
        >
          Day 1
        </span>
        <span
          onClick={() => setTab("2")}
          className={`pr-6 pl-4 py-2 cursor-pointer text-lg text-left transition-all ease-in-out duration-300 ${
            tab == "2" ? "underline-shadow" : ""
          }`}
        >
          Day 2
        </span>
      </div>
      <div className="w-full max-w-4xl blue-glassmorphism p-4 md:p-8">
        <div className="grid grid-cols-3 gap-4 text-xl">
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Event
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Time
          </span>
          <span className="hover:bg-slate-800 cursor-pointer hover:shadow-md rounded-md  pl-2 py-2">
            Venue
          </span>
        </div>
        {getEventsTable(tab)}
      </div>
    </div>
  );
};

export default EventsList;