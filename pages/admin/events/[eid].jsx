import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  checkAdminAccess,
  deleteEvent,
  getEvent,
  updateEvent,
} from "../../../feUtils/functions";
import { MdDeleteForever } from "react-icons/md";
import { uuidv4 } from "@firebase/util";
import Image from "next/image";
import Loader from "../../../components/Loader";

const EditEventPage = () => {
  const router = useRouter();
  const [event, setEvent] = useState({});
  const { eid } = router.query;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      checkAdminAccess();
    } catch (e) {
      window.location.href = "/";
    }
    if (!eid) return;
    setLoading(true);
    getEvent(eid)
      .then((e) => {
        setEvent(e);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [eid]);

  const handleUpdate = () => {
    setLoading(true);
    updateEvent(eid, event)
      .then((res) => {
        console.log(res);
        if (res.ok)
          window.location.href = "/admin/events";
        else
          alert("Something went wrong, Please try again.")
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        alert("Something went wrong, Please try again.");
        setLoading(false);
      });
  };

  const handleDelete = () => {
    setLoading(true);
    deleteEvent(eid)
    .then(res => {
      console.log(res);
      if (res.ok)
          window.location.href = "/admin/events";
        else
          alert("Something went wrong, Please try again.")
        setLoading(false);
    })
    .catch((e) => {
      console.log(e);
      alert("Something went wrong, Please try again.");
      setLoading(false);
    });
  }

  return (
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
                  className="absolute w-32 move-in-style"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full py-3 pl-2">
                <input
                  className="block text-2xl md:text-4xl uppercase font-bold tracking-wider bg-transparent border rounded-md pl-2 py-2"
                  placeholder="Event Name"
                  value={event?.name}
                  onChange={(e) =>
                    setEvent((prevE) => ({ ...prevE, name: e.target.value }))
                  }
                />
                <input
                  className="block text-sm max-w-2xl font-mono bg-transparent border rounded-md pl-2 py-2"
                  placeholder="Event Tagline"
                  value={event?.tagline}
                  onChange={(e) =>
                    setEvent((prevE) => ({ ...prevE, tagline: e.target.value }))
                  }
                />
              </div>
            </div>
            <div className="w-full md:max-w-5xl p-2 flex justify-end items-center">
              <button
                className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                onClick={handleUpdate}
              >
                Update
              </button>
              
              <button onClick={handleDelete} className="block bg-red-600 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-red-900">
                Delete
              </button>
            </div>
            <div className="w-full md:max-w-5xl mx-2 my-4 py-2 rounded-md shadow-md blue-glassmorphism flex justify-between items-center">
              <div className="text-sm font-mono  text-gray-400 mx-4">
                <p className="">
                  <span className="font-bold text-base text-white">
                    Date, Time:
                  </span>
                  <span className="">
                    <input
                      className="text-sm font-mono  text-gray-400 mt-3 bg-transparent border rounded-md pl-2 py-2"
                      placeholder="Eg: 04/04/23 3:30 PM"
                      value={event?.time}
                      onChange={(e) =>
                        setEvent((prevE) => ({
                          ...prevE,
                          time: e.target.value,
                        }))
                      }
                    />
                  </span>
                </p>
                <p className="">
                  <span className="font-bold text-base text-white">Venue</span>
                  <span className="">
                    <input
                      className="text-sm font-mono  text-gray-400 mt-3 bg-transparent border rounded-md pl-2 py-2"
                      placeholder="Eg: S203"
                      value={event?.venue}
                      onChange={(e) =>
                        setEvent((prevE) => ({
                          ...prevE,
                          venue: e.target.value,
                        }))
                      }
                    />
                  </span>
                </p>
                <p className="">
                  <span className="font-bold text-base text-white">
                    Category
                  </span>
                  <span className="">
                    <select
                      name="category"
                      id="category"
                      className="appearance-none blue-glassmorphism px-3 py-2 my-2 mx-3"
                      onChange={(e) => {
                        console.log(e.target.value);
                        setEvent((prevE) => ({
                          ...prevE,
                          category: e.target.value,
                        }));
                      }}
                    >
                      {[
                        "Robotics",
                        "Coding",
                        "Entertainment",
                        "Innovation",
                        "Gaming",
                        "BrainGames",
                        "SpeakUp",
                      ].map((cat) => (
                        <option className="bg-slate-700" selected={cat === event?.category } key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full md:max-w-5xl mx-2 my-4 p-4 rounded-md shadow-md blue-glassmorphism flex flex-col justify-center items-start">
              <h3 className="font-bold text-xl text-white tracking-wider uppercase">
                Description
              </h3>
              <textarea
                className="text-sm font-mono  text-gray-400 mt-3 bg-transparent border rounded-md pl-2 py-2 w-full"
                placeholder="Description"
                value={event?.description}
                onChange={(e) =>
                  setEvent((prevE) => ({
                    ...prevE,
                    description: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <div className="w-full md:max-w-5xl mx-2 my-4 p-4 rounded-md shadow-md blue-glassmorphism flex flex-col justify-center items-start">
              <h3 className="font-bold text-xl text-white tracking-wider uppercase">
                Rules
              </h3>
              <textarea
                className="text-sm font-mono  text-gray-400 mt-3 bg-transparent border rounded-md pl-2 py-2 w-full"
                placeholder="Rules"
                value={event?.rules}
                onChange={(e) =>
                  setEvent((prevE) => ({
                    ...prevE,
                    rules: e.target.value,
                  }))
                }
              ></textarea>
            </div>
            <div className="w-full md:max-w-5xl mx-2 my-4 p-4 rounded-md shadow-md blue-glassmorphism flex flex-col justify-center items-start">
              <div className="w-full flex justify-between items-center">
                <h3 className="font-bold text-xl text-white tracking-wider uppercase">
                  Coordinators
                </h3>
                <button
                  className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
                  onClick={() => {
                    setEvent((prevE) => ({
                      ...prevE,
                      coordinators: {
                        ...prevE.coordinators,
                        [`coordinator${uuidv4()}`]: "",
                      },
                    }));
                  }}
                >
                  Add
                </button>
              </div>
              <div className="text-sm font-mono  text-gray-400 mt-3">
                {Object.entries(event?.coordinators || {}).map(
                  ([key, value]) => (
                    <div
                      className="flex flex-col justify-center items-center py-3"
                      key={key}
                    >
                      <input
                        type="text"
                        className="text-sm font-mono  text-gray-400 mt-3 bg-transparent border rounded-md pl-2 py-2"
                        placeholder="Enter Name"
                        value={value.name}
                        onChange={(e) => {
                          setEvent((prevE) => ({
                            ...prevE,
                            coordinators: {
                              ...prevE.coordinators,
                              [key]: {
                                ...prevE.coordinators[key],
                                name: e.target.value,
                              },
                            },
                          }));
                        }}
                      />
                      <input
                        type="number"
                        className="text-sm font-mono  text-gray-400 mt-3 bg-transparent border rounded-md pl-2 py-2"
                        placeholder="Enter number"
                        value={value.phone}
                        onChange={(e) => {
                          setEvent((prevE) => ({
                            ...prevE,
                            coordinators: {
                              ...prevE.coordinators,
                              [key]: {
                                ...prevE.coordinators[key],
                                phone: e.target.value,
                              },
                            },
                          }));
                        }}
                      />
                      <MdDeleteForever
                        className="text-red-500 text-2xl ml-8 cursor-pointer"
                        onClick={() => {
                          return setEvent((prevE) => {
                            delete prevE.coordinators[key];
                            return { ...prevE };
                          });
                        }}
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </section>
  );
};

export default EditEventPage;
