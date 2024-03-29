import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { getAllEvents, search } from "../feUtils/functions";

import EventItem from "./EventItem";
import Loader from "./Loader";

const EventsList = ({ eventUrlPrefix }) => {
  const [tab, setTab] = useState("1");
  const [dayOneEvents, setDayOneEvents] = useState([]);
  const [dayTwoEvents, setDayTwoEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const param = router.query;

  const [searchText, setSearchText] = useState(param?.category || "");

  useEffect(() => {
    if (param != {}) setSearchText(param?.category || "");
    setLoading(true);
    getAllEvents()
      .then((es) => {
        const one = [],
          two = [];
        console.log(es);
        es.forEach((e) => {
          const dt = new Date(e.time);
          const day = dt.getDate();
          if (day == 4) one.push(e);
          else if (day == 5) two.push(e);
          else one.push(e);
        });
        setDayOneEvents(one);
        setDayTwoEvents(two);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [param]);

  const getEventsTable = (tabValue) => {
    if (tabValue == "1") {
      return (
        <div className="flex flex-col justify-center items-center space-y-4">
          {search(dayOneEvents, searchText).map((e) => (
            <EventItem
              key={e.id}
              eventName={e.name}
              link={`${eventUrlPrefix}/${e.id}`}
              description={e.description}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="flex flex-col justify-center items-center space-y-4">
          {search(dayTwoEvents, searchText).map((e) => (
            <EventItem
              key={e.id}
              eventName={e.name}
              link={`${eventUrlPrefix}/${e.id}`}
              description={e.description}
            />
          ))}
        </div>
      );
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center mx-2">
      <div className="">
        <h1 className="text-gradient font-bold text-2xl md:text-4xl tracking-wide">
          Events
        </h1>
      </div>
      <div className="w-full max-w-4xl flex justify-between items-center">
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

        <div className="flex justify-center items-center w-56 white-glassmorphism px-2">
          <BiSearchAlt fontSize={24} className="" />
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value.toLocaleLowerCase())}
            type="text"
            placeholder="search for an event"
            className="my-1 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm md:text-base"
          />
        </div>
      </div>

      <div className="w-full max-w-4xl blue-glassmorphism p-4 md:p-8">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center p-3">
            <Loader classProps={"w-20 h-20"} />
          </div>
        ) : (
          getEventsTable(tab)
        )}
      </div>
    </div>
  );
};

export default EventsList;
