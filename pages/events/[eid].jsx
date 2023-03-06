import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../../components/Loader";
import { getEvent, registerForEvent } from "../../feUtils/functions";

const SingleEventPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [event, setEvent] = useState({});
  const { eid } = router.query;

  const [loading, setLoading] = useState(false);
  // const [registerLoading, setRegisterLoading] = useState(false);

  useEffect(() => {
    if (!eid) return;
    setLoading(true);
    getEvent(eid)
      .then((e) => {
        setLoading(false);
        setEvent(e);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [eid]);

  console.log(event);

  return (
    <>
      <Head>
        <title>ResonanceXII</title>
        <meta name="description" content="Unleash The Matrix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-1 w-full h-full min-h-screen py-28 flex items-center justify-start flex-col px-2">
        {loading ? (
          <Loader classProps={"w-20 h-20"} />
        ) : (
          <div className="w-full flex flex-col justify-center items-center h-full">
            <div className="w-full m-4 rounded-md shadow-md shadow-slate-400 h-48 overflow-hidden relative md:max-w-5xl">
              <div className="w-full h-full object-cover absolute top-0 left-0 event-bg-overlay">
                <Image
                  width={100}
                  height={100}
                  src="/images/astro.svg"
                  alt="astro"
                  className="absolute move-in-style"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full py-3 pl-2">
                <h3 className="text-2xl md:text-4xl uppercase font-bold tracking-wider">
                  {event?.name}
                </h3>
                <p className="text-sm max-w-2xl font-mono">{event?.tagline}</p>
              </div>
            </div>
            <div className="w-full md:max-w-5xl mx-2 my-4 py-2 rounded-md shadow-md blue-glassmorphism flex justify-between items-center">
              <div className="text-sm font-mono  text-slate-600 mx-4">
                <p className="">
                  <span className="font-bold text-base text-white">Date: </span>
                  <span className="">
                    {new Date(event?.time).toLocaleDateString()}
                  </span>
                </p>
                <p className="">
                  <span className="font-bold text-base text-white">Time: </span>
                  <span className="">
                    {new Date(event?.time).toLocaleTimeString()}
                  </span>
                </p>
                <p className="">
                  <span className="font-bold text-base text-white">
                    Venue:{" "}
                  </span>
                  <span className="">{event?.venue}</span>
                </p>
              </div>
              {status === "authenticated" &&
              session?.user?.email?.endsWith("@cemk.ac.in") ? (
                <button
                  onClick={() => {
                    setLoading(true);
                    registerForEvent(eid)
                      .then((res) => {
                        setLoading(false);
                        if (res.statusText == "OK") {
                          alert("Registered successfully");
                        } else {
                          alert("Please try again");
                        }
                      })
                      .catch((e) =>
                        alert("Failed to register. Please try again.")
                      );
                  }}
                  className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                >
                  Register
                </button>
              ) : null}
            </div>
            <div className="w-full md:max-w-5xl mx-2 my-4 p-4 rounded-md shadow-md blue-glassmorphism flex flex-col justify-center items-start">
              <h3 className="font-bold text-xl text-white tracking-wider uppercase">
                Description
              </h3>
              <div className="text-sm font-mono  text-slate-600 mt-3">
                {event?.description}
              </div>
            </div>
            <div className="w-full md:max-w-5xl mx-2 my-4 p-4 rounded-md shadow-md blue-glassmorphism flex flex-col justify-center items-start">
              <h3 className="font-bold text-xl text-white tracking-wider uppercase">
                Rules
              </h3>
              <div className="text-sm font-mono  text-slate-600 mt-3">
                <ul>
                  {Object.values(event?.rules || {}).map((rule) => (
                    <li key={rule}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full md:max-w-5xl mx-2 my-4 p-4 rounded-md shadow-md blue-glassmorphism flex flex-col justify-center items-start">
              <h3 className="font-bold text-xl text-white tracking-wider uppercase">
                Coordinators
              </h3>
              <div className="text-sm font-mono  text-slate-600 mt-3">
                <ul>
                  {Object.values(event?.coordinators || {}).map((co) => (
                    <li key={co?.phone}>
                      {co?.name}, {co?.phone}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SingleEventPage;
