import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import EventItem from "../components/EventItem";
import { getProfileData, unregisterFromEvent } from "../feUtils/functions";
import { useSession } from "next-auth/react";
import Loader from "../components/Loader";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return;
    else if (status === "authenticated") {
      setLoading(true);
      getProfileData()
        .then((p) => {
          setProfile(p);
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
        });
    } else {
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <section className="bg-gradient-1 w-full h-full py-28 flex items-center justify-start flex-col min-h-screen">
        {loading ? (
          <Loader classProps={"w-20 h-20"} />
        ) : (
          <>
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
                {profile?.registeredEvents?.length === 0 ? (
                  <div className="w-full h-full text-xl font-bold uppercase tracking-wider text-slate-400">
                    No Registered Events
                  </div>
                ) : (
                  profile?.registeredEvents?.map((event) => (
                    <div
                      key={event?.id}
                      className="flex justify-between items-center"
                    >
                      <EventItem
                        link={`/events/${event?.id}`}
                        eventName={event?.name}
                        description={event?.description}
                      />
                      {session?.user?.email?.endsWith("@cemk.ac.in") ? (
                        <button
                          className="bg-red-600 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-red-900"
                          onClick={() => {
                            setLoading(true);
                            unregisterFromEvent(event?.id)
                              .then((res) => {
                                if (res.statusText == "OK") {
                                  setLoading(false);
                                  window.location.href = "/profile";
                                  alert("Successfully Unregistered.");
                                } else {
                                  setLoading(false);
                                  throw new Error("Something went wrong");
                                }
                              })
                              .catch((_) =>
                                alert("Something went wrong, Try again.")
                              );
                          }}
                        >
                          Unregister
                        </button>
                      ) : null}
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default ProfilePage;
