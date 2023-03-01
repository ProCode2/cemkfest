import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EventItem from "../components/EventItem";
import { getProfileData, unregisterFromEvent } from "../feUtils/functions";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      getProfileData()
        .then((p) => setProfile(p))
        .catch((e) => console.log(e));
    } else {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <Head>
        <title>ResonanceXII</title>
        <meta name="description" content="Unleash The Matrix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-1 w-full h-full py-28 flex items-center justify-start flex-col min-h-screen">
        <div className="white-glassmorphism flex justify-start items-center py-3 px-4 w-11/12 m-4 max-w-5xl">
          <Image
            width={150}
            height={150}
            className="rounded-full shadow-md"
            src={profile?.user?.image}
            alt={profile?.user?.name}
          />
          <div className="ml-4">
            <h3 className="font-bold">{profile?.user?.name}</h3>
            <p className="text-xs text-slate-300">{profile?.user?.email}</p>
          </div>
        </div>
        <div className="blue-glassmorphism py-3 px-4 w-11/12 m-4 max-w-5xl">
          <h4 className="font-bold text-2xl md:text-4xl tracking-wide mb-4">
            Events
          </h4>
          <div className="w-full max-w-4xl blue-glassmorphism p-4 md:p-8">
            {profile?.registeredEvents?.map((event) => (
              <div
                key={event?.id}
                className="flex justify-between items-center"
              >
                <EventItem
                  link={`/events/${event?.id}`}
                  eventName={event?.name}
                  description={event?.description}
                />
                <button
                  className="bg-red-600 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-red-900"
                  onClick={() => {
                    unregisterFromEvent(event?.id)
                      .then((res) => {
                        if (res.status >= 200 && res.status < 300)
                          alert("Successfully Unregistered.");
                        else throw new Error("Something went wrong");
                      })
                      .catch((_) => alert("Something went wrong, Try again."));
                  }}
                >
                  Unregister
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
