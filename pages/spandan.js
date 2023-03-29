import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import TimeLine from "../components/TimeLine";
import { BiShareAlt } from "react-icons/bi";
import Head from "next/head";
import SLogo from "../public/images/spandan_logo.webp";
import Image from "next/image";
import SpandanGallery from "../components/SpandanGallery";
import { motion } from "framer-motion";

import Image1 from "../public/images/gallery/1.webp";
import Image2 from "../public/images/gallery/2.webp";
import Image3 from "../public/images/gallery/3.webp";
import Image4 from "../public/images/gallery/4.webp";
import Image5 from "../public/images/gallery/5.webp";
import Image6 from "../public/images/gallery/6.webp";
import Riddles from "../public/images/gallery/riddles.webp";

//Array of Images
const images = [Image1, Image2, Image3, Image4, Image5, Image6];

const SpandanPage = () => {
  const songs = [
    {
      link: "https://www.youtube.com/watch?v=PoQFP-sb-uQ",
      src: "/ure_jawa.mp3",
    },
    {
      link: "https://www.youtube.com/watch?v=asFPrC2RudI",
      src: "/se_amare.mp3",
    },
  ];
  const [songLink, setSongLink] = useState("");
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);
  const playAudio = () => {
    setPlaying(true);
    const song = songs[Math.floor(Math.random() * songs.length)];
    setSongLink(song.link);
    audioRef.current.src = song.src;
    audioRef.current.play();
  };

  const pauseAudio = () => {
    setPlaying(false);
    setSongLink("");
    audioRef.current.pause();
  };

  useEffect(() => {
    playAudio();
  }, []);
  return (
    <>
      <section className="w-full min-h-screen flex-col relative">
        <video
          className="absolute top-0 left-0 z-0 w-full h-full object-fill md:object-cover"
          src="/images/gallery/sbg.mp4"
          autoPlay={true}
          muted={true}
          loop={true}
        ></video>
        <div className="hero-section-overlay absolute top-0 left-0 w-full h-full z-10"></div>
      </section>
      <div className="w-full min-h-screen pt-32 bg-gradient">
        <div className="max-w-5xl bg-transparent mx-auto flex flex-col justify-start items-center">
          <TimeLine />
        </div>
        {/* <div className="hidden md:block max-w-4xl md:h-[800px] bg-transparent p-6 mx-auto">
          <div className="flex h-full w-full flex-col overflow-hidden rounded-md shadow-lg shadow-gray-900">
            <div className="flex-[3] bg-slate-800">
              <Image src={Image1} alt={"Performance"} className="flex-[3]" />
            </div>
            <div className="flex flex-[7] bg-white">
              <div className="flex-[2]"></div>
              <div className="flex flex-[8] flex-col bg-red-500">
                <div className="flex flex-[7] bg-yellow-400">
                  <div className="flex flex-[7] flex-col bg-green-500">
                    <div className="flex-[3]"></div>
                    <div className="flex flex-[7] bg-slate-500">
                      <div className="flex-[2]"></div>
                      <div className="flex flex-[8] flex-col bg-blue-500">
                        <div className="flex flex-[7] bg-yellow-400">
                          <div className="flex-[7]"></div>
                          <div className="flex flex-[3] flex-col bg-white"></div>
                        </div>
                        <div className="flex-[3]"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-[3] flex-col bg-slate-400"></div>
                </div>
                <div className="flex-[3]"></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="max-w-4xl bg-transparent p-6 mx-auto">
          <SpandanGallery />
        </div>
        {/* fixed bottom-10 right-10 p-4 rounded-md shadow-md text-sm text-slate-900 bg-slate-100 */}
        <div className="fixed bottom-3 right-3 md:bottom-8 md:right-8 p-4 rounded-md shadow-md max-w-max z-30">
          <span className="relative flex h-12 w-40">
            <span
              className={`absolute inline-flex h-full w-full rounded-md bg-sky-400 opacity-75 justify-center items-center ${
                playing ? "animate-ping" : ""
              }`}
            ></span>
            <span
              className="cursor-pointer relative inline-flex rounded-md h-12 w-40 bg-sky-500 text-sm justify-center items-center"
              onClick={() => {
                if (playing) pauseAudio();
                else playAudio();
              }}
            >
              {playing ? "Pause" : "Play songs of our artists"}
              {playing ? (
                <Link
                  target="_blank"
                  href={songLink}
                  className="absolute -top-4 -right-3"
                >
                  <BiShareAlt
                    fontSize={40}
                    className="bg-slate-700 text-white p-2 rounded-full shadow-md"
                  />
                </Link>
              ) : null}
            </span>
          </span>
        </div>
        <div className="w-full max-w-5xl p-4 mx-auto overflow-hidden">
          <h1 className="text-gradient font-bold text-2xl md:text-4xl tracking-wide text-center">
            Our Artists This Year
          </h1>
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            className="w-full flex flex-col md:flex-row my-12 overflow-hidden rounded-md shadow-md"
          >
            <div className="flex-1">
              {/* <Image src={Image2} alt="Ashes" /> */}
              <p className="w-44 h-80 text-gradient text-xl font-bold flex justify-center items-center rounded-md shadow-md">
                Official poster coming soon!
              </p>
            </div>

            <div className="flex-1 flex flex-col justify-center items-center p-6">
              <h1 className="text-gradient font-bold text-2xl md:text-6xl tracking-wide text-center mb-4">
                Ashes
              </h1>
              <Link href="https://www.youtube.com/@AshesBangladesh">
                <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                  Check Out
                </button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            className="w-full flex flex-col md:flex-row my-12 overflow-hidden rounded-md shadow-md"
          >
            <div className="flex-1 flex flex-col justify-center items-center p-6">
              <h1 className="text-gradient font-bold text-2xl md:text-6xl tracking-wide text-center mb-4">
                Riddles @ 7th April
              </h1>
              <Link href="https://www.youtube.com/@RiddlesTheBand">
                <button className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
                  Check Out
                </button>
              </Link>
            </div>
            <div className="flex-1">
              <Image src={Riddles} alt="Riddles" />
            </div>
          </motion.div>
        </div>

        <audio ref={audioRef} src="/se_amare.mp3" className="hidden"></audio>
      </div>
    </>
  );
};

export default SpandanPage;
